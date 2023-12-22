import { Link, Outlet } from "react-router-dom";
import "../page-stylesheets/Home.css";
import { useEffect, useState } from "react";
import NotebookForm from "../components/NotebookForm";
import ReflectionForm from "../components/ReflectionForm";

function Home( ) {

    // Load notebooks
    useEffect(() => {
        fetch('http://localhost:3000/notebooks')
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            setNotebooks(data);
          });
    }, []);

    // Load reflection questions
    useEffect(() => {
        fetch('http://localhost:3000/reflectionQuestions')
            .then((response) => response.json())
            .then((data) => setReflectionQuestions(data));
    }, []);

    // states
    const [notebooks, setNotebooks] = useState([]);
    const [reflectionQuestions, setReflectionQuestions] = useState([]);
    const [selectedValue, setSelectedValue] = useState("0");

    const notebookList = notebooks.map((notebook) => {
        return (
            <option key={notebook.id} value={`/notebook/${notebook.id}`}>
                Notebook #{notebook.id} - {notebook.title}
            </option>
        );
    });

    // add notebook to state array
    function addNotebook(newNotebook) {
        setNotebooks([...notebooks, newNotebook]);
        alert(`New notebook of id: ${newNotebook.id} has been created for you and added to the drop down list. :)`);
    }

    // add reflection to state array
    function addReflection(newReflection) {
        setReflectionQuestions([...reflectionQuestions, newReflection]);
    }


    return (
        <main>
            <h1 id="welcome-banner">Welcome to Learning Diary Lite! Let's get back to journaling our learning! :D</h1>
            <div id="note-selector">
                <select value={selectedValue}  onChange={(event) => setSelectedValue(event.target.value)}>
                    <option key="0" value="0"> -- Select a Notebook -- </option>
                    {notebookList}
                </select>
                <span>
                    <b>
                        <Link to={selectedValue}>GO!</Link>
                    </b>
                </span>
            </div>
            <Outlet context={{
                notebooks: [notebooks, setNotebooks],
                reflections: [reflectionQuestions, setReflectionQuestions]
            }} />
            <aside id="right-tab">
                <NotebookForm onAddNotebook={addNotebook} />
                <ReflectionForm onAddReflection={addReflection} />
            </aside>
            <br/>
        </main>
    );
}

export default Home;
import { Link, Outlet } from "react-router-dom";
import "../page-stylesheets/Home.css";
import { useEffect, useState } from "react";

function Home( ) {
    useEffect(() => {
        fetch('http://localhost:3000/notebooks')
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            setNotebooks(data);
          });
    }, []);

    const [notebooks, setNotebooks] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    // function updateNotebook(updatedNotebook) {
    //     setNotebooks(notebooks.map((notebook) => {
    //         return (notebook.id === updateNotebook.id) ? updatedNotebook : notebook
    //     }));
    //     console.log("it worked.");
    // }

    

    const notebookList = notebooks.map((notebook) => {
        return (
            <option key={notebook.id} value={`/notebook/${notebook.id}`}>
                Notebook #{notebook.id} - {notebook.title}
            </option>
        );
    });

    console.log(notebooks);

    return (
        <main>
            <h1 id="welcome-banner">Welcome to Learning Diary Lite! Let's get back to journaling our learning! :D</h1>
            <div id="note-selector">
                <select onChange={(event) => setSelectedValue(event.target.value)}>
                    <option key="0"> -- Select a Notebook -- </option>
                    {notebookList}
                </select>
                <span>
                    <b>
                        <Link to={selectedValue}>GO!</Link>
                    </b>
                </span>
            </div>
            <Outlet context={[notebooks, setNotebooks]} />
            <br/>
        </main>
    );
}

export default Home;
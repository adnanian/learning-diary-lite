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

    //   const notebookList = notebooks.map((notebook) => {
    //     if (notebook === null) {
    //         return <li key={Math.random()} >REE</li>
    //     }
    //     return (
    //         <li key={notebook.id}>
    //             <Link to={`/notebook/${notebook.id}`}>{notebook.title}</Link>
    //         </li>
    //     )
    //   });

    const notebookList = notebooks.map((notebook) => {
        return (
            <option key={notebook.id} value={`/notebook/${notebook.id}`}>
                Notebook #{notebook.id} - {notebook.title}
            </option>
        );
    });

    return (
        <main>
            <h1 id="welcome-banner">Welcome to Learning Diary Lite! Let's get back to journaling our learning! :D</h1>
            <div id="note-selector">
                <select defaultValue="0" onChange={(event) => setSelectedValue(event.target.value)}>
                    <option key="0" disabled> -- Select a Notebook -- </option>
                    {notebookList}
                </select>
                <span>
                    <b>
                        <Link to={selectedValue}>GO!</Link>
                    </b>
                </span>
            </div>
            <Outlet context={notebooks} />
            <br/>
        </main>
    );
}

export default Home;
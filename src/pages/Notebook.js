import { useState, useEffect } from 'react';
import '../page-stylesheets/Notebook.css';
import { useOutletContext, useParams } from 'react-router-dom';
import InfoTable from '../components/InfoTable.js';
import ReflectionTable from '../components/ReflectionTable';
import Notes from '../components/Notes.js';

function Notebook() {
    useEffect(() => {
        fetch('http://localhost:3000/reflectionQuestions')
            .then((response) => response.json())
            .then((data) => setReflectionQuestions(data));
    }, []);

    const [reflectionQuestions, setReflectionQuestions] = useState([]);

    // function addReflectionQuestion(newReflection) {
    //     setReflectionQuestions([...reflectionQuestions, newReflection]);
    //     console.log(`Reflection question #${newReflection.id} successfully added to the server!`);
    // }

    


    /*
    * Load notebook from outletcontext
    */
    const context = useOutletContext();
    const params = useParams();
    const notebook = context.notebooks.find((notebook) => notebook.id === parseInt(params.id));

    function saveNotes(updatedNotes) {
        fetch(`http://localhost:3000/notebooks/${notebook.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    notes: updatedNotes
                }
            )
        })
            .then((response) => response.json())
            .then((data) => context.onUpdateNotebook(data));
    }

    if (!notebook) {
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <article id="notes-view">
            <div id="left-tab">
                <InfoTable notebook={notebook} />
                <ReflectionTable reflectionQuestions={reflectionQuestions} />
            </div>
            <Notes notes={!notebook ? "" : notebook.notes} onSave={saveNotes}/>
            
        </article>
    )
}

export default Notebook;
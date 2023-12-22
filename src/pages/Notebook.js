import '../page-stylesheets/Notebook.css';
import { useOutletContext, useParams } from 'react-router-dom';
import InfoTable from '../components/InfoTable.js';
import ReflectionTable from '../components/ReflectionTable';
import Notes from '../components/Notes.js';

function Notebook() {
    

    /*
    * Load notebook from outletcontext
    */
    const [notebooks, setNotebooks] = useOutletContext().notebooks;
    const [reflectionQuestions, setReflectionQuestions] = useOutletContext().reflections;
    const params = useParams();
    const notebook = notebooks.find((notebook) => notebook.id === parseInt(params.id));


    // Make warning go away.
    console.log(setReflectionQuestions);

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
            .then((data) => {
                console.log(data);
                const updatedNotebooks = notebooks.map((notebook) => {
                    return (notebook.id === data.id) ? data : notebook;
                });
                setNotebooks(updatedNotebooks);
            });
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
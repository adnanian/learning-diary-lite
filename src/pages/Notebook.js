import { useState, useEffect } from 'react';
import '../page-stylesheets/Notebook.css';
import { useOutletContext, useParams } from 'react-router-dom';
import InfoTable from '../components/InfoTable.js';
import ReflectionTable from '../components/ReflectionTable';

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
    
    const params = useParams();
    const notebook = useOutletContext().find((notebook) => notebook.id === parseInt(params.id));
    const [notes, setNotes] = useState(!notebook ? "" : notebook.notes);

    return (
        <article id="notes-view">
            <div id="left-tab">
                <InfoTable notebook={notebook} />
                <ReflectionTable reflectionQuestions={reflectionQuestions} />
            </div>
            <div>
                <h4>Notes</h4>
                <textarea 
                    id="content-notes" 
                    name="content-notes" 
                    rows="40" 
                    cols="50" 
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                >
                </textarea>
            </div>
            
        </article>
    )
}

export default Notebook;
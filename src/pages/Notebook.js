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
    

    function handleUpdateNotes(event) {
        event.preventDefault();
    }

    return (
        <article id="notes-view">
            <div id="left-tab">
                <InfoTable notebook={notebook} />
                <ReflectionTable reflectionQuestions={reflectionQuestions} />
            </div>
            <div id="notes-div">
                <h4 id="notes-title">Notes</h4>
                <textarea 
                    id="content-notes" 
                    name="content-notes" 
                    rows="15" 
                    cols="50" 
                    wrap="hard"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                >
                </textarea>
            </div>
            <div id="right-tab">
                <button type="submit" onClick={handleUpdateNotes}>Save Notes</button>
            </div>
            
        </article>
    )
}

export default Notebook;
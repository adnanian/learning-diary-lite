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
    
    const params = useParams();
    const notebooks = useOutletContext();
    const notebook = notebooks.find((notebook) => notebook.id === parseInt(params.id));
    

    function handleUpdateNotes(event) {
        event.preventDefault();
    }

    return (
        <article id="notes-view">
            <div id="left-tab">
                <InfoTable notebook={notebook} />
                <ReflectionTable reflectionQuestions={reflectionQuestions} />
            </div>
            <Notes notes={!notebook ? "" : notebook.notes}/>
            <div id="right-tab">
                <button type="submit" onClick={handleUpdateNotes}>Save Notes</button>
            </div>
            
        </article>
    )
}

export default Notebook;
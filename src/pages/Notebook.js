import { useState, useEffect } from 'react';
import '../page-stylesheets/Notes.css';
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

    return (
        <article id="notes-view">
            <InfoTable notebook={notebook} />
            <ReflectionTable reflectionQuestions={reflectionQuestions} />
        </article>
    )
}

export default Notebook;
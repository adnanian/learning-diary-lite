import { useState, useEffect } from 'react';
import '../page-stylesheets/Notes.css';
import ContentTableRow from '../components/ContentTableRow';

function Notes() {
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
    
    const tableRows = reflectionQuestions.map((reflection, index) => {
        return (
            <ContentTableRow 
                key={reflection.id}
                rowNumber={index + 1}
                propertyName={reflection.prompt}
                propertyValue={reflection.type}
            />
        )
    });

    return (
        <>
            <div>
                <h1>To be added</h1>
            </div>
            <div id="reflection-tab">
                <h1>Reflection Questions</h1>
                <table id="reflection-table">
                    <thead>
                        <tr>
                            <th className="reflection-table-header">#</th>
                            <th className="reflection-table-header">Prompt</th>
                            <th className="reflection-table-header">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Notes;
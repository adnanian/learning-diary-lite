import { useState } from "react";

// Add new reflection questions.
function ReflectionForm( {onAddReflection} ) {
    const [formData, setFormData] = useState({
        prompt: "",
        type: "open"
    });


    // Update controlled form values.
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // Add a new reflection question to the db.json file and state array.
    function handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:3000/reflectionQuestions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                onAddReflection(data);
                setFormData({...formData, "prompt": ""});
            });
    }

    return (
        <form id="reflection-form" className="post-form" onSubmit={handleSubmit}>
            <h3>Add a New Reflection Question</h3>
            <div className="form-field">
                <label htmlFor="prompt">Prompt</label>
                <input
                    id="prompt"
                    type="text"
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                />
            </div>
            <div className="formField">
                <label htmlFor="type-drop-down">Type</label>
                <select 
                    id="type-drop-down"  
                    name="type" 
                    value={formData.type}
                    onChange={handleChange}>
                    <option key="open" value="open" selected>Open Question</option>
                    <option key="yes-or-no" value="yes-or-no">Yes or No Question</option>
                    <option key="task" value="task">Task</option>
                </select>
            </div>
            <input id="submit-reflection" type="submit" />
        </form>
    );
}

export default ReflectionForm;
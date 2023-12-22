import { useState } from "react";

function ReflectionForm( {onAddReflection} ) {
    const [formData, setFormData] = useState({
        prompt: "",
        type: ""
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

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
                <label className="form-field" htmlFor="prompt">Prompt</label>
                <input
                    id="prompt"
                    type="text"
                    name="prompt"
                    value={formData.prompt}
                    onChange={handleChange}
                />
            </div>
            <div>
                <select value={formData.type} onChange={handleChange}>
                    <option key="open" value="open" selected>Open Question</option>
                    <option key="yes-and-no" value="yes-or-no">Yes or No Question</option>
                    <option key="task" value="task">Task</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    );
}

export default ReflectionForm;
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
            <label className="form-field" htmlFor="reflection">New reflection</label>
            <input
                id="reflection"
                type="text"
                name="reflection"
                value={prompt}
                onChange={handleChange}
            />
            <select defaultValue={"open"} onChange={handleChange}>
                <option value="open" selected>Open Question</option>
                <option value="yes-or-no">Yes or No Question</option>
                <option value="task">Task</option>
            </select>
            <input type="submit" />
        </form>
    );
}

export default ReflectionForm;
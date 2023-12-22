import { useState } from "react";

// Allows users to add new sets of notes.
function NotebookForm( {onAddNotebook} ) {
    const [formData, setFormData] = useState(
        {
            title: "",
            author: "",
            year: "",
            type: "",
            length: "",
            notes: ""
        }
    );

    // Update controlled form values.
    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    // Add a new notebook to the db.json file and state array.
    function handleSubmit(event) {
        event.preventDefault();
        fetch ('http://localhost:3000/notebooks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                onAddNotebook(data);
                // Have to declare a new variable in order to reset form values. Otherwise, this won't work.
                const newFormData = {...formData};
                for (let key in newFormData) {
                    newFormData[key] = "";
                    console.log(newFormData);
                    console.log(formData);
                    console.log(key);
                }
                setFormData(newFormData);
                console.log(formData);
            });
    }

    return (
        <form id="notebook-form" className="post-form" onSubmit={handleSubmit}>
            <h3>Add a New Notebook</h3>
            <div className="form-field">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" value={formData.title} onChange={handleChange}/>
            </div>
            <div className="form-field">
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text" value={formData.author} onChange={handleChange}/>
            </div>
            <div className="form-field">
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="text" value={formData.year} onChange={handleChange}/>
            </div>
            <div className="form-field">
                <label htmlFor="type">Type</label>
                <input id="type" name="type" type="text" value={formData.type} onChange={handleChange}/>
            </div>
            <div className="form-field">
                <label htmlFor="length">Length</label>
                <input id="length" name="length" type="text" value={formData.length} onChange={handleChange}/>
            </div>
            <input type="submit" />
        </form>
    );
}

export default NotebookForm;
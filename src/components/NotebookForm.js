import { useState } from "react";

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

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" value={formData.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text" value={formData.author} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="text" value={formData.year} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <input id="type" name="type" type="text" value={formData.type} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="length">Length</label>
                <input id="length" name="length" type="text" value={formData.length} onChange={handleChange}/>
            </div>
            <input type="submit" />
        </form>
    );
}

export default NotebookForm;
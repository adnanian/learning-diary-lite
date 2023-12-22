function NotebookForm( {onAddNotebook} ) {
    const [formData, setFormData] = useState(
        {
            title: "",
            author: "",
            year: "",
            type: "",
            length: ""
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
        fetch ('http://localhost:3001/notebooks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => onAddNotebook(data));
    }

    return (
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" value={title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="author">Author</label>
                <input id="author" name="author" type="text" value={author} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="year">Year</label>
                <input id="year" name="year" type="text" value={year} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <input id="type" name="type" type="text" value={type} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="length">Length</label>
                <input id="length" name="length" type="text" value={length} onChange={handleChange}/>
            </div>
            <input type="submit" />
        </form>
    );
}
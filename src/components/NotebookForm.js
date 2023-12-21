function NotebookForm() {
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
            
        });
    }

    return (
        <form>
            
        </form>
    );
}
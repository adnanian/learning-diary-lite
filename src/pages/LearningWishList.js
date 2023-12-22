import { useEffect, useState } from "react";

function LearningWishList() {
    useEffect(() => {
        fetch('http://localhost:3000/learningWishList')
            .then((response) => response.json())
            .then((data) => {
                setWishList(data);
            });
    }, []);

    const [wishlist, setWishList] = useState([]);
    const [savedTitle, setSavedTitle] = useState("");

    const listItems = wishlist.map((item) => <li>{item.savedTitle}</li>);

    function addSavedTitle(event) {
        event.preventDefault();
        fetch('http://localhost:3000/learningWishList', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                savedTitle: savedTitle
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setWishList([...wishlist, data]);
                setSavedTitle("");
            });
    }

    return (
        <main>
            <h1>List of What I Want to Learn in the Future</h1>
            <form onSubmit={addSavedTitle}>
                <h2>Save something you would like to learn in the future.</h2>
                <label htmlFor="savedTitle">Title</label>
                <input
                    id="savedTitle"
                    name="savedTitle"
                    type="text"
                    value={savedTitle}
                    onChange={(event) => setSavedTitle(event.target.value)}
                />
                <input type="submit" />
            </form>
            <ul>
                {listItems}
            </ul>
        </main>
    );

}

export default LearningWishList;
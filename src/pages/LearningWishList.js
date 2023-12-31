import { useEffect, useState } from "react";
import "../page-stylesheets/LearningWishList.css";

function LearningWishList() {

    // Load learningWishList
    useEffect(() => {
        fetch('http://localhost:3000/learningWishlist')
            .then((response) => response.json())
            .then((data) => {
                setWishList(data);
            });
    }, []);

    const [wishlist, setWishList] = useState([]);
    const [savedTitle, setSavedTitle] = useState("");

    const listItems = wishlist.map((item) => <li key={item.id} className="item">{item.savedTitle}</li>);

    // Adds a new saved title to the learning wishlist in the db.json and the state array.
    function addSavedTitle(event) {
        event.preventDefault();
        fetch('http://localhost:3000/learningWishlist', {
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
        <main id="wishlist-page">
            <h1 className="wishlist-element">List of What I Want to Learn in the Future</h1>
            {/** Add more titles for the user to review later */}
            <form id="wishlist-form" onSubmit={addSavedTitle}>
                <h2 className="wishlist-element">Save something you would like to learn in the future.</h2>
                <div id="input-div">
                    <label htmlFor="savedTitle">Title</label>
                    <input
                        id="savedTitle"
                        name="savedTitle"
                        type="text"
                        value={savedTitle}
                        onChange={(event) => setSavedTitle(event.target.value)}
                    />
                    <input id="submit-saved-title" type="submit" />
                </div>
            </form>
            <ul id="wishlist" className="wishlist-element">
                {listItems}
            </ul>
        </main>
    );

}

export default LearningWishList;
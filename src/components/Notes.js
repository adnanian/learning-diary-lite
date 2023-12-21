import { useState } from "react";

function Notes({ notes }) {
    const [text, setText] = useState(notes);

    return (
        <div id="notes-div">
            <form id="notes-form">
                <h4 id="notes-title">Notes</h4>
                <textarea
                    id="content-notes"
                    name="content-notes"
                    form="notes-form"
                    rows="15"
                    cols="50"
                    wrap="hard"
                    value={text}
                    maxLength="1000"
                    onChange={(event) => setText(event.target.value)}
                /><br/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default Notes;
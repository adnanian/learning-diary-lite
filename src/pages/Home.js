import { useState, useEffect} from "react";
import "../page-stylesheets/Home.css";

function Home() {
    useEffect(() => {
        fetch('http://localhost:3000/entries')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setEntries(data);
          });
      }, []);
    
    
      const [entries, setEntries] = useState([]);

      const entryList = entries.map((entry) => {
        return (
            <option key={entry.id} value={entry.title}>{entry.title}</option>
        )
      });

    return (
        <main>
            <h1 id="welcome-banner">Welcome to Learning Diary Lite! Let's get back to journaling our learning! :D</h1>
            <div>
                <select>
                    {entryList}
                </select>
            </div>
        </main>
    );
}

export default Home;
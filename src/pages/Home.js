import "../page-stylesheets/Home.css";

function Home( {onAddNotebook} ) {
    

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
            <button onClick={onAddNotebook(null)}>Click me</button>
        </main>
    );
}

export default Home;
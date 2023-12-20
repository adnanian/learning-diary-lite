import { Link, Outlet, useOutletContext } from "react-router-dom";
import "../page-stylesheets/Home.css";

function Home(  ) {
    const notebooks = useOutletContext();

      const notebookList = notebooks.map((notebook) => {
        if (notebook === null) {
            return <li key={Math.random()} >REE</li>
        }
        return (
            <li key={notebook.id}>
                <Link to={`/notebook/${notebook.id}`}>{notebook.title}</Link>
            </li>
        )
      });

      console.log(notebookList);

    return (
        <main>
            <h1 id="welcome-banner">Welcome to Learning Diary Lite! Let's get back to journaling our learning! :D</h1>
            <div>
                <ul>
                    {notebookList}
                </ul>
            </div>
            <Outlet context={notebooks} />
        </main>
    );
}

export default Home;
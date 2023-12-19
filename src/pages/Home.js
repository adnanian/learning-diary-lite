//import { useState, useEffect} from "react";

import { useOutletContext } from "react-router-dom";
import "../page-stylesheets/Home.css";

function Home() {
    const user = useOutletContext().currentUser;

    if (!user) {
        return <h1>Please login to view your profile!</h1>
    }

    return (
        <main>
            <h1 id="welcome-banner">Welcome, {user.firstName}! Let's get back to journaling our learning! :D</h1>
        </main>
    );
}

export default Home;
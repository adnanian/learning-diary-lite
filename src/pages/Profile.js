

function Profile() {
    // call useContext with our UserContext
    const user = null;

    // Fill in user data to component
    if (!user) return <h2>Please Login to View Profile!</h2>
    return (
        <div>
            <h1 id="welcome-user" className="profile">Welcome, {user.firstName}!</h1>
            <h1 className="profile">Time to write some notes!!!!! 😁</h1>
        </div>
    );
}

export default Profile;
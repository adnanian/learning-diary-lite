import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
    return (
        <nav className="navigation">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/notes"
                className="nav-link"
            >
                Notes
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
            >
                About
            </NavLink>
            <button 
                onClick={logout}
                className="nav-link"
            >
                Logout
            </button>
        </nav>
    );
}

export default NavBar; 
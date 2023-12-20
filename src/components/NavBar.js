import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navigation">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/content-wishlist"
                className="nav-link"
            >
                Content Wishlist
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
            >
                About
            </NavLink>
        </nav>
    );
}

export default NavBar; 
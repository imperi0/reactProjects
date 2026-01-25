import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/">Movie App</Link>
            </div>
            <div className="navbar-link">
                <Link to="/favourities">Favourities</Link>
            </div>
        </nav>
    );
}


export default NavBar;
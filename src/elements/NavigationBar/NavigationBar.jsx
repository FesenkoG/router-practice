import { Link, NavLink } from "react-router-dom";
import './NavigationBar.css'


export default function NavigationBar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <nav className="custom--nav">
            <span>
                <Link className="home--title" to="/">#VANLIFE</Link>
            </span>
            <span>
                <NavLink
                    className="host--title"
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >Host</NavLink>
                <NavLink className="about--title" to="/about" style={({ isActive }) => isActive ? activeStyles : null}>About</NavLink>
                <NavLink className="vans--title" to="/vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
            </span>
        </nav>
    )
}
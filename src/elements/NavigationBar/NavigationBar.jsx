import { Link } from "react-router-dom";
import './NavigationBar.css'


export default function NavigationBar() {
    return (
        <nav className="custom--nav">
            <span>
                <Link className="home--title" to="/">#VANLIFE</Link>
            </span>
            <span>
                <Link className="about--title" to="/about">About</Link>
                <Link className="vans--title" to="/vans">Vans</Link>
            </span>
        </nav>
    )
}
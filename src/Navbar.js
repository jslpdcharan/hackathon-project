import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './images/osu_cs.jpg';
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                    <img src={logo} alt="OSU" style={{width: '100px', height: 'auto'}}/>
                    C
                </a>
                Computer
                <ul className="nav-menu">
                    <li className="nav-item">
                        <CustomLink to="/about" className="nav-links">About Us</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink to="/Committee" className="nav-links">Committee</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink to="/Events" className="nav-links">Events</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink to="/Clubs" className="nav-links">Clubs</CustomLink>
                    </li>
                    <li className="nav-item">
                        <CustomLink to="/Alumni" className="nav-links">Alumni</CustomLink>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

function CustomLink({
                        to, children,
                        ...
                            props
                    }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
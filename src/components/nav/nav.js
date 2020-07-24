// react import
import React from "react"
import { Link } from "react-router-dom"

// class -> className
// href -> to
// a -> Link
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style="background-color: #333333">
            <span id="header" className="navbar-brand mb-1 h1">Natalie Michelsen</span>
            <button id="navbarbutton" className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="items" className="nav navbar-nav navbar-right">
                    <li className="nav-item1">
                        <Link className="nav-link" to="About" style="color: #333333;">About Natalie</Link>
                    </li>
                    <li className="nav-item1">
                        <Link className="nav-link" to="Portfolio" style="color: #333333;">Bootcamp Portfolio</Link>
                    </li>
                    <li className="nav-item1">
                        <Link className="nav-link" to="Collaborations" style="color: #333333;">Collaborations</Link>
                    </li>
                    <li className="nav-item2">
                        <Link className="nav-link" to="Contact" style="color: #333333;">Contact Natalie</Link>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <Link id="linkButton" className="btn btn-secondary dropdown-toggle" to="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Natalie's Links</Link>
                <div id="dropdown-bar" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link id="dropdown-items" className="dropdown-item" to="https://github.com/nataliemichelsen">GitHub</Link>
                    <Link id="dropdown-items" className="dropdown-item" to="">Heroku</Link>
                    <Link id="dropdown-items" className="dropdown-item"
                        to="https://www.linkedin.com/in/natalie-michelsen-8ba1811a2/">LinkedIn</Link>
                    <Link id="dropdown-items" className="dropdown-item" to="assets/docs/Natalie-Resume.pdf">Resume (PDF)</Link>
                </div>
            </div>
        </nav>
    )
}

// react export
export default Nav

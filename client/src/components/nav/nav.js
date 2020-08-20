// react import
import React from "react";
import { Link } from "react-router-dom";

// nav function
// must still add svg files "xmlns" for vector art
function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-info"
      style={{ backgroundColor: "#333333" }}
    >
      <span id="header" className="navbar-brand mb-1 h1">
        ReciPique
      </span>
      <button
        id="navbarbutton"
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="items" className="nav navbar-nav navbar-right">
          <li className="navbar">
            <Link className="nav-link" to="/" style={{ color: "#333333" }}>
              Home
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/addrecipe"
              style={{ color: "#333333" }}
            >
              Add Recipe
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/search"
              style={{ color: "#333333" }}
            >
              Search Recipes
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/favorites"
              style={{ color: "#333333" }}
            >
              Favorite Recipes
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/profile"
              style={{ color: "#333333" }}
            >
              Profile
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/settings"
              style={{ color: "#333333" }}
            >
              Settings
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/help"
              style={{ color: "#333333" }}
            >
              Help
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/login"
              style={{ color: "#333333" }}
            >
              Lonin
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/signup"
              style={{ color: "#333333" }}
            >
              Signup
            </Link>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/logout"
              style={{ color: "#333333" }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// react export
export default Nav;

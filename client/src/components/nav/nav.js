// react import
import React from "react";
import { Link } from "react-router-dom";

// nav function
// must still add svg files "xmlns" for vector art
function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
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
            <svg
              id="add"
              class="nav-btn mx-auto bi bi-plus-square"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns=""
            >
              <path
                fill-rule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
            </svg>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/add-recipe"
              style={{ color: "#333333" }}
            >
              Add Recipe
            </Link>
            <svg
              id="add"
              class="nav-btn mx-auto bi bi-plus-square"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns=""
            >
              <path
                fill-rule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
            </svg>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/search"
              style={{ color: "#333333" }}
            >
              Search Recipes
            </Link>
            <svg
              id="add"
              class="nav-btn mx-auto bi bi-plus-square"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns=""
            >
              <path
                fill-rule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
            </svg>
          </li>
          <li className="navbar">
            <Link
              className="nav-link"
              to="/logout"
              style={{ color: "#333333" }}
            >
              Logout
            </Link>
            <svg
              id="add"
              class="nav-btn mx-auto bi bi-plus-square"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns=""
            >
              <path
                fill-rule="evenodd"
                d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
              />
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <Link
          id="linkButton"
          className="btn btn-secondary dropdown-toggle"
          to="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          *
        </Link>
        <div
          id="dropdown-bar"
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
        >
          <Link id="dropdown-items" className="dropdown-item" to="/profile">
            User Profile
          </Link>
          <Link id="dropdown-items" className="dropdown-item" to="/favorites">
            Saved Recipes
          </Link>
          <Link id="dropdown-items" className="dropdown-item" to="/settings">
            Settings
          </Link>
          <Link id="dropdown-items" className="dropdown-item" to="/help">
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
}

// react export
export default Nav;

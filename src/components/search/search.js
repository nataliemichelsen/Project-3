// react import
import React from 'react'
import { Link } from "react-router-dom"

// search function
function Search(props) {
    return (
        <form className="row">
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input 
                name="search"
                type="text"
                className="form-control"
                placeholder="Search"
                id="search"
                onChange={props.handleInputChange}
                value={props.value}>

                </input>
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
            </div>
        </form>
    )
}

// react export
export default Search
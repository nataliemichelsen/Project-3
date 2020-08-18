import React, { useState } from "react";
import "./pages.css";
import API from "../util/API"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''}
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    API.authenticate()
      .then(res => {
        console.log(res.data);
        if(res.data === true){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  handleChangeSearch(event) {
    this.setState({search: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    API.search({
      email:this.state.search,
    })
      .then(res => {
        console.log(res);
        this.setState({searched: res.data.success});
        if(this.state.searched){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
    }

render() {
  return (
    <div>
      <br></br>

    <div className="text-center">
      <h1 className="search-info">Use this page to search for recipes</h1>
      <br></br>
    <form>
    
      <label>
      <input type="text" value={this.state.search} onChange={this.handleChangeSearch} />
      </label>
      <label>
      <button className="search-button">Search</button>
      </label>
    </form>
    </div>
    </div>
  );
}
}

export default Search;

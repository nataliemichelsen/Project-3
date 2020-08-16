import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import API from "../util/API"
import "./pages.css";

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', loggedIn: false}
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    API.authenticate()
      .then(res => {
        console.log(res.data);
        if(res.data === false){
          this.props.history.push("/login");
        }
      })
      .catch(err => console.log(err));
  };

  handleChangeName(event) {
    this.setState({name: event.target.value});
  };

  handleChangeCategory(event) {
    this.setState({category: event.target.value});
  };

  handleChangeSteps(event) {
    this.setState({steps: event.target.value});
  };

  handleChangeTime(event) {
    this.setState({time: event.target.value});
  };

  handleChangeVisibility(event) {
    this.setState({visibility: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    API.addRecipe({
      email:this.state.email,
      password:this.state.password
    })
      .then(res => {
        console.log(res);
        console.log("login success " + res.data.success + " loggedIn " + this.state.loggedIn)
        this.setState({loggedIn: res.data.success});
        if(this.state.loggedIn){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
}

export default AddRecipe;
import React, { useState } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import API from "../util/API"
import "./pages.css";

class Login extends React.Component {
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
        if(res.data === true){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  };

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    API.login({
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
      <div>
        <br></br>
      <div className="text-center">
        <h1 className="login-info text-center">Please Log In</h1>
      <br></br>
      <form onSubmit={this.handleSubmit} classname="text-center">
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
  };
}

export default Login;
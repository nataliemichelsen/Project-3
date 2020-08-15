import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import API from "../util/API"
import "./pages.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', loggedId: false}
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    API.authenticate()
      .then(res => {
        console.log(res.data);
        this.setState({loggedId: res.data});
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
    alert('Login to ReciPique.');
    event.preventDefault();
    API.login({
      email:this.state.email,
      password:this.state.password
    })
      .then(res => {
        console.log(res);
        this.setState({loggedId: res.success});
      })
      .catch(err => console.log(err));
    }

  render() {
    console.log(this.state.loggedId)
    if(this.state.loggedId) { //this is how I tried to redirect
      return ( //
          <Redirect to='/' />
      );
  }
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
        <h3>hello {this.state.loggedId}</h3>
      </form>
    );
  };
}

export default Login;
import React, { useState } from "react";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password: ''}
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangePhone(event) {
      this.setState({username: event.target.username});
    };

    handleChangePhone(event) {
      this.setState({password: event.target.password});
    };
  
    handleSubmit(event) {
      alert('Login to ReciPique.');
      event.preventDefault();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
  
    }

export default Login;
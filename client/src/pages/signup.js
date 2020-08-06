import React, { useState } from "react";

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', phone: '', email: '', username: '', password: ''}
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleChangeName(event) {
      this.setState({name: event.target.name});
    };
  
    handleChangeEmail(event) {
      this.setState({email: event.target.email});
    };
  
    handleChangePhone(event) {
      this.setState({phone: event.target.phone});
    };

    handleChangePhone(event) {
      this.setState({username: event.target.username});
    };

    handleChangePhone(event) {
      this.setState({password: event.target.password});
    };
  
    handleSubmit(event) {
      alert('Thank you for signing up with ReciPique.');
      event.preventDefault();
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label>
            Phone:
            <input type="text" value={this.state.phone} onChange={this.handleChangePhone} />
          </label>
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

export default Signup;

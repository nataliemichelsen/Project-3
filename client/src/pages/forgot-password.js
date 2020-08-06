import React, { useState } from "react";

class Forgotpassword extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', email: ''}
      this.handleChangeUsername = this.handleChangeUsername.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChangePhone(event) {
      this.setState({username: event.target.username});
    };

    handleChangePhone(event) {
      this.setState({email: event.target.email});
    };
  
    handleSubmit(event) {
      alert('Forgot your password? Reset it now.');
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
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
  
    }

export default Forgotpassword;
import React, { useState } from "react";
import API from "../util/API"
import "./pages.css";

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', password: '', phone: '', bio: '', picture: 'https://via.placeholder.com/150'}
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeBio = this.handleChangeBio.bind(this);
      // this.handleChangePicture = this.handleChangePicture.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleChangeName(event) {
      console.log(event.target.value)
      this.setState({name: event.target.value});
    };
  
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    };

    handleChangePassword(event) {
      this.setState({password: event.target.value});
    };
  
    handleChangePhone(event) {
      this.setState({phone: event.target.value});
    };

    handleChangeBio(event) {
      this.setState({bio: event.target.value});
    };

    // handleChangePicture(event) {
    //   console.log("picture", event.target)
    //   this.setState({picture: event.target.value});
    // };
  
    handleSubmit(event) {
      alert('Thank you for signing up with ReciPique.');
      event.preventDefault();
      console.log("my targets", event.target);


      const {name, value} = event.target;
      console.log("name" + this.state.picture + " val " + value)




      API.signup({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        bio: this.state.bio,
        picture: this.state.picture
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
          <label>
            Phone:
            <input type="text" value={this.state.phone} onChange={this.handleChangePhone} />
          </label>
          <label>
            About you:
            <input type="text" value={this.state.bio} onChange={this.handleChangeBio} />
          </label>
          {/* <label>
            Picture:
            <input type="file" name="picture" onChange={this.handleChangePicture} />
          </label> */}
          <input type="submit" value="Submit" />
        </form>
      );
    };
  }

export default Signup;

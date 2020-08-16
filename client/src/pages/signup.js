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
      this.handleChangePicture = this.handleChangePicture.bind(this);

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

    handleChangePicture(event) {
      console.log("picture", event.target.files[0])
      this.setState({picture: event.target.files[0]});
    };
  
    handleSubmit(event) {
      alert('Thank you for signing up with ReciPique.');
      event.preventDefault();


      console.log("picture " + this.state.picture)

      const formData = new FormData(); 
      formData.append("picture", this.state.picture); 
      formData.append("name", this.state.name);
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);
      formData.append("phone", this.state.phone);
      formData.append("bio", this.state.bio);

      console.log("my form data ", formData.getAll("*"))

      API.signup(formData)
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
          <label>
            Picture:
            <input type="file" name="picture" onChange={this.handleChangePicture} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
  }

export default Signup;

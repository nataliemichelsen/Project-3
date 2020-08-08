import React, { useState } from "react";

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', password: '', phone: '', bio: '', picture: ''}
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeBio = this.handleChangeBio.bind(this);
      this.handleChangePicture = this.handleChangePicture.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    };
  
    handleChangeName(event) {
      this.setState({name: event.target.name});
    };
  
    handleChangeEmail(event) {
      this.setState({email: event.target.email});
    };

    handleChangePassword(event) {
      this.setState({password: event.target.password});
    };
  
    handleChangePhone(event) {
      this.setState({phone: event.target.phone});
    };

    handleChangeBio(event) {
      this.setState({bio: event.target.bio});
    };

    // handleChangePicture(event) {
    //   this.setState({picture: event.target.picture});
    // };
  
    handleSubmit(event) {
      alert('Thank you for signing up with ReciPique.');
      event.preventDefault();
      console.log("my targets", event.target);
      API.signup({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        bio: this.state.bio,
        picture: event.target.picture
      })
        .then(res => {
          console.log(res);
          if(res.info.message === "Login success!"){
            console.log("redirect")
          }else{
            console.log("failed", res)
          }
        })
        .catch(err => console.log(err));
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
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
          <label>
            Picture:
            <input type="file" name="picture" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };
  
    }

export default Signup;

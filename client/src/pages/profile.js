import React, { useState } from "react";
import "./pages.css";
import API from "../util/API";
import Authenticate from "../util/Authenticate"
import { data } from "jquery";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true}
      };

    async componentDidMount() {
        let auth = await Authenticate();
        this.setState({id: auth.data.id, loading: false})
        const queryString = window.location.href;
        const id = queryString.split("/")[4] || this.state.id;
        API.getOne("/api/profile/" + id).then((res) => {
            this.setState({
                ...res.data
            });
        })
        .catch((err) => console.log(err));
    }

    render() {
        if(this.state.loading === true){
            return (<center><h1>Loading...</h1></center>)
        }
        return (
            <div>
                <div>
                <h1 className="profile-header">User Profile</h1>
                </div>
                <div className="profile-page">
                <div className="profile-body">
                    <img
                    className="profile-image"
                    src={this.state.picture}
                    alt={`Viewing profile for ${this.state.name}.`}
                    width="300"
                    height="auto"
                    />

                    <p className="profile-name text">
                    {this.state.name}
                    </p>

                    <p className="profile-phone text">{this.state.phone}</p>

                    <a className="profile-email">
                    {this.state.email}
                    </a>
                </div>
                <h4 className="profile-info">To make changes to your profile, go to Settings.</h4>
                </div>
            </div>
        );
    }
}

export default Profile;

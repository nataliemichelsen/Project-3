import React, { useState } from "react";
import "./pages.css";

function Profile(props) {
  return (
    <>
      <div>
        <h1 className="profile-header">User Profile</h1>
      </div>
      <div className="profile-page">
        <div className="profile-body">
          <img
            className="profile-image"
            src={props.image}
            alt={`Viewing profile for ${props.firstName} ${props.lastName}.`}
          />

          <p className="profile-name text">
            {props.firstName} {props.lastName}
          </p>

{/* future development - age verification */}
          {/* <p className="profile-dob text">
            Dob:{" "}
            <Moment format="MM/DD/YYYY" className="moment">
              {props.DOB}
            </Moment>
          </p> */}

          <p className="profile-phone text">{props.phone}</p>

          <a className="profile-email" href={`mailto:${props.email}`}>
            {props.email}
          </a>
        </div>
        <h4 className="profile-info">To make changes to your profile, go to {`Settings`}.</h4>
      </div>
    </>
  );
}

export default Profile;

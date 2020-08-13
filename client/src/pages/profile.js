import React, { useState } from "react";
import "./pages.css";

function Profile() {
  return (
    <div>
      <h1 className="add-header">User Profile</h1>
      <h4 className="add-info">You are viewing your profile.</h4>
      <h4 className="add-info">To make changes to your profile, go to "Settings".</h4>
    </div>
  );
}

export default Profile;

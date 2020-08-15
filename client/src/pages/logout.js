import React, { useState } from "react";
import "./pages.css";
import API from "../util/API"

function Logout() {

    API.logout()
      .then(res => {
        console.log("logged out", res);
      })
      .catch(err => console.log(err));

  return (
    <div className="logout-page">
      <h2 className="logout-details">You are now logged out of ReciPique.</h2>
      <h4 className="logout-details">To log back in again, please click .</h4>
    </div>
  );
}

export default Logout;

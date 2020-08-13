import React, { useState } from "react";
import API from "../util/API"

function Activate() {
    console.log("wow");
    API.activate().then(res => {
          console.log(res);
    }).catch(err => console.log(err));
      
    return (
        <div className="activate-page">
            <h2 className="activate-details">Your account is now active.</h2>
            <h4 className="activate-details">To return to the home page, please click .</h4>
        </div>
    );
}

export default Activate;
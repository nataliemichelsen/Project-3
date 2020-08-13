import React, { useState } from "react";
import API from "../util/API"

function Activate() {
    API.list()
      .then((res) =>
        this.setState({
          result: res.data.results,
          users: res.data.results,
        })
      )
      .catch((err) => console.log(err));
    }
      
    return (
        <div className="activate-page">
            <h2 className="activate-details">"Your account is now active."</h2>
            <h4 className="activate-details">"To return to the home page, please click."</h4>
        </div>
    );
}

export default Activate;
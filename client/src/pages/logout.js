import React, { useState } from "react";


function Logout() {
  return (
    <div className="logout-page">
      <h2 className="logout-details">You are now logged out of MyRecipes.</h2>
      <h4 className="logout-details">To log back in again, please click ${here}.</h4>
    </div>
  );
}

export default Logout;

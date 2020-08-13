import React, { useState } from "react";
import "./pages.css";

function Favorites() {
  return (
    <div>
      <h1>Your Saved Recipes</h1>
      <h4 className="add-info">To remove a recipe, simply re-click the illuminated "heart" icon.</h4>
    </div>
  );
}

export default Favorites;

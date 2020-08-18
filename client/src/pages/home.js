import React, { useState } from "react";
import "./pages.css";

function Home() {
  return (
    
    <div className="text-center">
      <br></br>
      <h1 className="home-header">Welcome to MyRecipes!</h1>
      <h4 className="home-info">Here you can add a recipe of your own</h4>
      <h4 className="home-info">Search for a recipe you've been looking for.</h4>
      <h4 className="home-info">Just click on the tabs above and begin!</h4>
    </div>
  );
}

export default Home;

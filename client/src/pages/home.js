import React, { useState } from "react";
import "./pages.css";

function Home() {
  return (
    <div>
      <h1 className="home-header">Welcome to MyRecipes!</h1>
      <h4 className="home-info">Add a favorite recipe of your own.</h4>
      <h4 className="home-info">Search for a recipe you've been looking for.</h4>
      <h4 className="home-info">Browse categories or see what's new.</h4>
    </div>
  );
}

export default Home;

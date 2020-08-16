import React, { useState } from "react";
import "./pages.css";

class Viewrecipe extends Component {
  state = {
    results: [],
    sorted: false,
    search: "",
  };

  componentDidMount() {
    API.list()
      .then((res) =>
        this.setState({
          result: res.data.results,
          users: res.data.results,
        })
      )
      .catch((err) => console.log(err));

function Viewrecipe() {
  return (
    <>
      <div>
        <h1 className="view-recipe-header">{`Viewing Recipe: ${props.recipeName}.`}</h1>
        <h4 className="view-recipe-info">Add a favorite recipe of your own, or one from someone you know.</h4>
      </div>
      <div className="view-recipe-page">
        <div className="view-recipe-body">
          <h2 className="view-recipe-name">{props.recipeName}</h2>
          <img
            className="view-recipe-image"
            src={props.image}
            alt={`${props.recipeName}`} />
          <div className="view-recipe-actions">
            {/* add vector images for sms, email, & print - see ready file in slack chat */}
            <button className="view-recipe-favorites" alt="Save recipe to Favorites."></button>
            <button className="view-recipe-share-email" href={`mailto:${props.email}`} alt="Share recipe via email."></button>
            <button className="view-recipe-share-sms" alt="Share recipe via SMS."></button>
            <button className="view-recipe-share-print" alt="Print recipe."></button>
          </div>
          <p className="view-recipe-details text">
            {props.author}
            {props.date}
            {props.category}
            {props.ingredients}
            {props.instructions}
            {props.time}
            {props.visibility}
            {props.recipeId}
          </p>
        </div>
        <h4 className="view-recipe-info">Please remember to always attribute the author when submitting a new recipe.</h4>
      </div>
      <div>
        <h3 className="view-recipe-comments">{props.comments}</h3>
        <p className="view-recipe-comments-details text">
          {props.author}
          {props.date}
          {props.recipeId}
        </p>
      </div>
    </>
  );
}

function addFavorite(recipeId) {
  
}

function shareEmail() {
  
}

function shareSMS() {
  
}

function printRecipe() {
  window.print()
}

// bookmark recipe code
function bookmark(title,url){

  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  url =url+sPage;

  if (window.sidebar) // firefox
  window.sidebar.addPanel(title, url, "");
  else if(window.opera && window.print){ // opera

  var elem = document.createElement('a');

  elem.setAttribute('href',url);
  elem.setAttribute('title',title);
  elem.setAttribute('rel','sidebar');
  elem.click();

  } else if(document.all)
  window.external.AddFavorite(url, title);
}
  }

export default Viewrecipe;

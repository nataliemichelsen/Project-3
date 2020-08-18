import React, { useState } from "react";
import API from "../util/API"
import Authenticate from "../util/Authenticate";

class Viewrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  };

  async componentDidMount() {
    let auth = await Authenticate();
    this.setState({author: auth.data.id, loading: false});
    const queryString = window.location.href;
    const id = queryString.split("/")[4];
    API.getOne("/api/viewrecipe/" + id).then((res) => {
      this.setState({
          ...res.data
      });
    })
    .catch((err) => console.log(err));
  };

  addFavorite(recipeId) {
  
  }
  
  shareEmail() {
    
  }
  
  shareSMS() {
    
  }
  
  printRecipe() {
    window.print()
  }

  bookmark(title,url){

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

  render(){
    console.log(this.state.name);
    if(this.state.loading === true){
      return (<center><h1>Loading...</h1></center>)
    }
    return (
      <>
        <div>
          <h1 className="view-recipe-header"></h1>
          <h4 className="view-recipe-info">Add a favorite recipe of your own, or one from someone you know.</h4>
        </div>
        
      </>
    );
  }
}
export default Viewrecipe;

import React, { useState } from "react";
import API from "../util/API"
import Authenticate from "../util/Authenticate";

class Viewrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
    this.handleChangeComment = this.handleChangeComment.bind(this);
  };

  async componentDidMount() {
    let auth = await Authenticate();
    this.setState({author: auth.data.id});
    const queryString = window.location.href;
    const id = queryString.split("/")[4];
    API.getOne("/api/viewrecipe/" + id).then((res) => {
      console.log(res.data);
      if(Object.keys(res.data).length !== 0){
        this.setState({
          ...res.data, ...{loading: false}
      });
      }
    })
    .catch((err) => console.log(err));
  };

  handleChangeComment(event) {
    this.setState({comment: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    API.addComment({
      comment:this.state.comment,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
    }

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
    console.log(this.state.User);
    if(this.state.User){
    }
    
    if(this.state.loading === true && !this.state.User){
      return (<center><h1>Loading...</h1></center>)
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="view-recipe-header">{this.state.name}</h1>
              <h3>By {this.state.User.name}</h3>
              <img src={this.state.picture} width="200" height="150"/>
              <div>Category: {this.state.category}</div>
              <div>ingredients: {this.state.ingredients}</div>
              <div>steps: {this.state.steps}</div>
              <div>estimated time: {this.state.time} minutes</div>
              <div>Date: {this.state.createdAt}</div>
              <br/>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Comment:
                  <input type="text" value={this.state.comment} onChange={this.handleChangeComment} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        
      </>
    );
  }
}
export default Viewrecipe;

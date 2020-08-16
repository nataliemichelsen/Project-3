import React, { useState } from "react";
import "./pages.css";
import API from "../util/API"

class Editrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', author: '', date: '', category: '', ingredients: '', instructions: '', time: '', visibility: '', recipeId: ''}
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeInstructions = this.handleChangeInstructions.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleChangeVisibility = this.handleChangeVisibility.bind(this);
    this.handleChangeRecipeId = this.handleChangeRecipeId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    API.authenticate()
      .then(res => {
        console.log(res.data);
        if(res.data === true){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };

  handleChangeName(event) {
    this.setState({name: event.target.value});
  };

  handleChangeAuthor(event) {
    this.setState({author: event.target.value});
  };

  handleChangeDate(event) {
    this.setState({date: event.target.value});
  };

  handleChangeCategory(event) {
    this.setState({category: event.target.value});
  };

  handleChangeIngredients(event) {
    this.setState({ingredients: event.target.value});
  };

  handleChangeInstructions(event) {
    this.setState({instructions: event.target.value});
  };

  handleChangeTime(event) {
    this.setState({time: event.target.value});
  };

  handleChangeVisibility(event) {
    this.setState({visibility: event.target.value});
  };

  handleChangeRecipeId(event) {
    this.setState({recipeId: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    API.search({
      email:this.state.edit,
    })
      .then(res => {
        console.log(res);
        this.setState({edit: res.data.success});
        if(this.state.edit){
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
    }

render() {
  return (
    <form>
      <label>
      <input type="text" value={this.state.name} onChange={this.handleChangeName} />
      </label>
      <label>
      <input type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
      </label>
      <label>
      <input type="text" value={this.state.date} onChange={this.handleChangeDate} />
      </label>
      <label>
      <input type="text" value={this.state.category} onChange={this.handleChangeCategory} />
      </label>
      <label>
      <input type="text" value={this.state.ingredients} onChange={this.handleChangeIngredients} />
      </label>
      <label>
      <input type="text" value={this.state.instructions} onChange={this.handleChangeInstructions} />
      </label>
      <label>
      <input type="text" value={this.state.time} onChange={this.handleChangeTime} />
      </label>
      <label>
      <input type="text" value={this.state.visibility} onChange={this.handleChangeVisibility} />
      </label>
      <label>
      <input type="text" value={this.state.recipeId} onChange={this.handleChangeRecipeId} />
      </label>
      <label>
      <button className="search-button">Edit Recipe</button>
      </label>
    </form>
  );
}
}

export default Editrecipe;


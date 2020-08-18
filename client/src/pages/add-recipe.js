import React, { useState } from "react";
import "./pages.css";
import API from "../util/API";
import Authenticate from "../util/Authenticate";

class Addrecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      category: "",
      ingredients: "",
      steps: "",
      time: "",
      picture: "",
      visibility: "",
      loading: true,
    };
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeIngredients = this.handleChangeIngredients.bind(this);
    this.handleChangeSteps = this.handleChangeSteps.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeVisibility = this.handleChangeVisibility.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let auth = await Authenticate();
    this.setState({ author: auth.data.id, loading: false });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeCategory(event) {
    console.log("category", event.target.value);
    this.setState({ category: event.target.value });
  }

  handleChangeIngredients(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleChangeSteps(event) {
    this.setState({ steps: event.target.value });
  }

  handleChangeTime(event) {
    this.setState({ duration: event.target.value });
  }

  handleChangeImage(event) {
    this.setState({ image: event.target.files[0] });
  }

  handleChangeVisibility(event) {
    this.setState({ visibility: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("author", this.state.author);
    formData.append("category", this.state.category);
    formData.append("ingredients", this.state.ingredients);
    formData.append("steps", this.state.steps);
    formData.append("time", this.state.duration);
    formData.append("picture", this.state.picture);
    formData.append("visibility", this.state.visibility);

    API.addRecipe(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.loading === true) {
      return (
        <center>
          <h1>Loading...</h1>
        </center>
      );
    }
    return (
      <form
        onSubmit={this.handleSubmit}
        encType="multipart/form-data"
        className="text-center"
      >
        <label>
          Recipe Photos:
          <input
            type="file"
            name="picture"
            onChange={this.handleChangePicture}
          />
        </label>
        <br />
        <label>
          Recipe Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </label>
        <br />
        <label>
          Author
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleChangeAuthor}
          />
        </label>
        <br />
        <label>
          Category
          <select onChange={this.handleChangeCategory} defaultValue="1">
            <option value="1">Dessert</option>
            <option value="2">Breakfast</option>
            <option value="3">Lunch</option>
            <option value="4">Dinner</option>
            <option value="5">Side Dish</option>
            <option value="6">Appetizer</option>
            <option value="7">Beverage</option>
            <option value="8">Entree</option>
            <option value="9">Holiday</option>
            <option value="10">Special Diet</option>
          </select>
        </label>
        <br />
        <label>
          Ingredients
          <textarea
            type="text"
            value={this.state.ingredients}
            onChange={this.handleChangeIngredients}
          />
        </label>
        <br />
        <label>
          Steps
          <textarea
            type="text"
            value={this.state.steps}
            onChange={this.handleChangeSteps}
          />
        </label>
        <br />
        <label>
          Estimate Duration (in minutes)
          <input
            type="number"
            value={this.state.duration}
            onChange={this.handleChangeDuration}
          />
        </label>
        <br />
        <label>
          Recipe private / public?
          <select onChange={this.handleChangeVisibility} defaultValue="1">
            <option value="1">True</option>
            <option value="0">False</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Addrecipe;

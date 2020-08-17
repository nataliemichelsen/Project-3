import axios from "axios";

export default {
  login: function(data) {
    console.log("Login data ", data)
    return axios.post("/api/login", data)
  },

  logout: function() {
    return axios.get("/api/logout")
  },

  signup: function(data) {
    return axios.post("/api/signup", data);
  },

  activate: function(){
    const queryString = window.location.href;
    const id = queryString.split("/")[4];
    const token = queryString.split("/")[5];
    return axios.get("/api/activate/" + id + "/" + token)
  },

  authenticate: function(){
    return axios.get("/api/authenticate");
  },
  
  resetStart: function(data) {
    return axios.put("/api/reset/send", data);
  },
  
  resetPassword: function(data) {
    return axios.put("/api/reset/password", data);
  },

  addRecipe: function(data){
    return axios.post("/api/addrecipe", data)
  },

  getOne: function(data){
    return axios.get(data);
  }
};

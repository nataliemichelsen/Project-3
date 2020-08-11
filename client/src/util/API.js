import axios from "axios";

export default {
  login: function(data) {
    
    return axios.post("/api/login" + data);
  },

  signup: function(data) {
    console.log("sign up data ", data)
    return axios.post("/api/signup", data);
  },
  
  resetStart: function(data) {
    return axios.put("/api/reset/send" + data);
  },
  
  resetPassword: function(data) {
    return axios.put("/api/reset/password" + data);
  }
};

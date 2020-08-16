const express = require("express");
const session = require('cookie-session')
// passport configuration
const passport = require("./config/passport");

const routes = require("./routes");
const fileUpload = require('express-fileupload');
// const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser')
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(fileUpload());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// using sessions to keep track of our user's login status
app.set('trust proxy', 1)
app.use(
  session({ 
    secret: "keyboard cat", 
    name: 'session',
    resave: false, 
    saveUninitialized: true,
    keys: ['key1', 'key2'], 
    cookie: {
      secure: true,
      httpOnly: true,
      // domain: 'example.com',
      // path: '/',
      expires: 1000,
      sameSite: true
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(bodyParser())
//app.use(cookieParser())
// Serve up static assets (usually on heroku)


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
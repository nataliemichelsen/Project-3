// react import
import React from 'react';

// import Nav from './components/nav/nav'
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddRecipe, About, Contact, Editrecipe, Favorites, Help, Home, Logout, Profile, Search, Settings, Viewrecipe } from "./pages/index"
import Signup from './pages/signup';
import Activate from './pages/activate';
import Login from './pages/login';

// import Addrecipe from "./pages/add-recipe"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path= '/' component= {Home}/> 
          <Route exact path= '/addrecipe' component= {AddRecipe}/> 
          <Route exact path= '/search' component= {Search}/> 
          <Route exact path= '/logout' component= {Logout}/> 
          <Route exact path= '/profile' component= {Profile}/> 
          <Route exact path= '/favorites' component= {Favorites}/> 
          <Route exact path= '/settings' component= {Settings}/> 
          <Route exact path= '/help' component= {Help}/>
          <Route exact path= '/about' component= {About}/>
          <Route exact path= '/contact' component= {Contact}/>
          <Route exact path= '/editrecipe' component= {Editrecipe}/>
          <Route exact path= '/viewrecipe' component= {Viewrecipe}/>
          <Route exact path= '/login' component= {Login}/>
          <Route exact path= '/signup' component= {Signup}/>
          <Route exact path= '/activate/:id?/:token?' component= {Activate}/>
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;

// react import
import React from 'react';

// import Nav from './components/nav/nav'
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Addrecipe, About, Contact, Editrecipe, Favorites, Help, Home, Logout, Profile, Search, Settings, Viewrecipe } from "./pages/index"

// import Addrecipe from "./pages/add-recipe"
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path= '/' component= {Home}/> 
          <Route exact path= '/addrecipe' component= {Addrecipe}/> 
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
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;

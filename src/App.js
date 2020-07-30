// react import
import React from 'react';

// import Nav from './components/nav/nav'
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/home";
import Addrecipe from "./pages/add-recipe";
import Search from "./pages/search";
import Logout from "./pages/logout"


// 
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
          {/* <Route exact path= '/' component= {User-Profile}/> 
          <Route exact path= '/' component= {Favorites}/> 
          <Route exact path= '/' component= {Settings}/> 
          <Route exact path= '/' component= {Help}/>  */}
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;

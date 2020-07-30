// react import
import React from 'react';
import Nav from './components/nav/nav'
import Column from './components/column/column'
import Card from './components/card/card'
import Container from './components/container/container'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import MainContent from './components/main-content/main-content'
import Row from './components/row/row'
import Search from './components/search/search'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// 
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path= '/' component= {Home}/> 
          <Route exact path= '/' component= {Add-Recipe}/> 
          <Route exact path= '/' component= {Search}/> 
          <Route exact path= '/' component= {Logout}/> 
        </Switch>
        <Switch>
          <Route exact path= '/' component= {User-Profile}/> 
          <Route exact path= '/' component= {Favorites}/> 
          <Route exact path= '/' component= {Settings}/> 
          <Route exact path= '/' component= {Help}/> 
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;

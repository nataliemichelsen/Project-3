// react import
import React from 'react';
import Nav from './components/nav/nav'
import Nav from './components/footer/footer'
import Nav from './components'
import Nav from './components'
import Nav from './components'
import Nav from './components'
import Nav from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// 
function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path= '/' component= {About}/> 
          <Route exact path= '/' component= {Portfolio}/> 
          <Route exact path= '/' component= {Contact}/> 
          <Route exact path= '/' component= {Collaborations}/> 
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;

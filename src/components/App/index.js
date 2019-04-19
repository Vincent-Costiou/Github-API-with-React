/**
 * Import
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Navigation from '../Navigation';
import Login from '../Login';
import About from '../About';
import Welcome from '../Welcome';
import Search from '../Search';


// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Router>
      <Navigation />
      <Route exact path="/welcome" component={Welcome} />
      <Route path="/search" component={Search} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
    </Router>
    
  </div>
);

/**
 * Export
 */
export default App;

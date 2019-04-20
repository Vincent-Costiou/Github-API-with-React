/**
 * Import
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Navigation from '../Navigation';
import Login from '../Login';
import About from '../About';
import Welcome from '../Welcome';
import Search from '../Search';
import NotFound from '../NotFound';


// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Router>
      <Navigation />
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route path="/search" component={Search} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Login} />
        <Route path="/logout" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);

/**
 * Export
 */
export default App;

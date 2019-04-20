/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Navigation from 'src/containers/Navigation';
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

const App = ({ loggedIn }) => (
  <div id="app">
    <Router>
      {loggedIn && <Navigation />}
      <Switch>
        <Route
          exact
          path="/"
          render={() => (loggedIn ? (<Redirect to="/welcome" />) : (<Redirect to="/login" />))}
        />
        <Route
          path="/login"
          render={() => (loggedIn ? (<Redirect to="/welcome" />) : (<Login />))}
        />
        <Route
          path="/welcome"
          render={() => (loggedIn ? (<Welcome />) : (<Redirect to="/login" />))}
        />
        <Route
          path="/search"
          render={() => (loggedIn ? (<Search />) : (<Redirect to="/login" />))}
        />
        <Route
          path="/about"
          render={() => (loggedIn ? (<About />) : (<Redirect to="/login" />))}
        />
        <Route
          path="/logout"
          render={() => (<Redirect to="/" />)}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
);


App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default App;

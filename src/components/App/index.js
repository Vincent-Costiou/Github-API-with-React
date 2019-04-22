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
import Home from 'src/containers/Home';
import Search from 'src/containers/Search';
import RepoDetail from '../RepoDetail';
import About from '../About';
import NotFound from '../NotFound';


// Styles et assets
import './app.scss';

/**
 * Code
 */

const App = ({ loggedIn }) => (
  <div id="app">
    <Router>
      <Navigation title="Hello" />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/search"
          render={() => (loggedIn ? (<Search />) : (<Redirect to="/" />))}
        />
        <Route
          path="/about"
          render={() => (loggedIn ? (<About />) : (<Redirect to="/" />))}
        />
        <Route
          path="/logout"
          render={() => (<Redirect to="/" />)}
        />
        <Route
          path="/repo"
          render={() => (loggedIn ? (<RepoDetail />) : (<Redirect to="/" />))}
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

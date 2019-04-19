/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Navigation from '../Navigation';
import Login from '../Login';

// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Navigation />
    <Login />
  </div>
);

/**
 * Export
 */
export default App;

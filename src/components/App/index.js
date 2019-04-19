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
import About from '../About';


// Styles et assets
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Navigation />
    {/* <Login /> */}
    <About />
  </div>
);

/**
 * Export
 */
export default App;

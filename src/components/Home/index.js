import React from 'react';
import PropTypes from 'prop-types';

import Login from 'src/containers/Login';
import Welcome from 'src/containers/Welcome';


import './index.scss';

const Home = ({ loggedIn }) => (
  <main>
    {loggedIn ? <Welcome /> : <Login />}
  </main>
);

Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Home;

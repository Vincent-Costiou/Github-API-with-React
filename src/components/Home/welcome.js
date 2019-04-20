import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Welcome = ({ welcomeMessage }) => (
  <main id="welcome">
    <h1 id="welcomeMessage">{welcomeMessage}</h1>
    {/* <h1 id="welcomeMessage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates tempora inventore, commodi qui unde laborum accusamus nam aut illum?</h1> */}

  </main>
);

Welcome.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
};

export default Welcome;

import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Welcome = ({ welcomeMessage }) => (
  <main id>
    <h1 id="welcomeMessage">{welcomeMessage}</h1>
  </main>
);

Welcome.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
};

export default Welcome;

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Navigation = ({ onLogout, loggedIn }) => (
  <Segment inverted id="header">
    <Menu inverted secondary id="nav">
      <Menu.Item name="welcome" as={NavLink} to="/">
        Welcome
      </Menu.Item>
      {loggedIn
        && (
          <Menu.Item name="search" as={NavLink} to="/search">
          Search
          </Menu.Item>
        )
      }
      <Menu.Item name="about" as={NavLink} to="/about">
        A Propos
      </Menu.Item>
      {loggedIn
        && (
          <Menu.Item name="logout" as={NavLink} to="/logout" onClick={onLogout}>
          Deconnexion
          </Menu.Item>
        )
      }
    </Menu>
  </Segment>
);

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Navigation;

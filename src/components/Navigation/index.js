import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './index.scss';

const Navigation = () => (
  <Segment inverted id="header">
    <Menu inverted secondary id="nav">
      <Menu.Item name="welcome" as={NavLink} to="/welcome">
        Welcome
      </Menu.Item>
      <Menu.Item name="search" as={NavLink} to="/search">
        Search
      </Menu.Item>
      <Menu.Item name="about" as={NavLink} to="/about">
        A Propos
      </Menu.Item>
      <Menu.Item name="login" as={NavLink} exact to="/">
        Login
      </Menu.Item>
      <Menu.Item name="logout" as={NavLink} to="/logout">
        Deconnexion
      </Menu.Item>
    </Menu>
  </Segment>
);

export default Navigation;

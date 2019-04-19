import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


const Navigation = () => (
  <Menu>
    <Menu.Item name="welcome" as={NavLink} to="/welcome">
      Welcome
    </Menu.Item>
    <Menu.Item name="search" as={NavLink} to="/search">
      Search
    </Menu.Item>
    <Menu.Item name="about" as={NavLink} to="/about">
      A Propos
    </Menu.Item>
    <Menu.Item name="login" as={NavLink} to="/login">
      Login
    </Menu.Item>
    <Menu.Item name="logout" as={NavLink} to="/logout">
      Deconnexion
    </Menu.Item>
  </Menu>
);

export default Navigation;

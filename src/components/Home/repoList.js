import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import './index.scss';

const RepoList = ({ title }) => (
  <div className="tabResult">
    <h2 id="title">{title}</h2>
    <List divided relaxed className="resultTab">
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as={Link} to="/repo">Semantic-Org/Semantic-UI</List.Header>
          <List.Description as={Link} to="/repo">Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as={Link} to="/repo">Semantic-Org/Semantic-UI-Docs</List.Header>
          <List.Description as={Link} to="/repo">Updated 22 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as={Link} to="/repo">Semantic-Org/Semantic-UI-Meteor</List.Header>
          <List.Description as={Link} to="/repo">Updated 34 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

RepoList.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RepoList;

import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Item = ({ repo, onRepoClick }) => (
  <List.Item key={repo.id}>
    <List.Icon name="github" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header as={Link} to="/repo" onClick={onRepoClick(repo)}>{repo.header}</List.Header>
      <List.Description>Date du dernier update : {repo.updatedAt}</List.Description>
    </List.Content>
  </List.Item>
);

Item.propTypes = {
  repo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    updateAt: PropTypes.string.isRequired,
  })),
  onRepoClick: PropTypes.func.isRequired,
};

Item.defaultProps = {
  repo: {},
};


export default Item;

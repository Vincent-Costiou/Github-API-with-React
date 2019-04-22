import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './index.scss';

const ResultList = ({ searchedRepos, lastResearch, searchResultMessage }) => (
  <div className="tabResult">

    <h2 id="researchResultMessage">{searchResultMessage + ' ' + lastResearch}</h2>

    <List divided relaxed>
      {
        Object.keys(searchedRepos).length !== 0
        && (

          Object.keys(searchedRepos).map(key => (
            <List.Item key={searchedRepos[key].id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as={Link} to="/repo">{searchedRepos[key].header}</List.Header>
                <List.Description>Date du dernier update : {searchedRepos[key].updatedAt}</List.Description>
              </List.Content>
            </List.Item>
          ))
        )
      }
    </List>
  </div>
);


ResultList.propTypes = {
  lastResearch: PropTypes.string.isRequired,
  searchResultMessage: PropTypes.string.isRequired,
  searchedRepos: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        header: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        updateAt: PropTypes.string.isRequired,
      }),
    ),
  ),
};

ResultList.defaultProps = {
  searchedRepos: {},
};


export default ResultList;

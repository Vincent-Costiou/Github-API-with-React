import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Item from 'src/containers/Item';

import './index.scss';

const RepoList = ({ title, repos }) => (
  <div className="tabResult">
    <h2 id="title">{title}</h2>
    <List divided relaxed>
      {Object.keys(repos).length === 0 && (<p id="emptyListMessage">Il n'y a aucun repos dans cette liste</p>)}
      {
        Object.keys(repos).length !== 0
        && (

          Object.keys(repos).map(key => (
            <Item repo={repos[key]} key={repos[key].id} />
          ))
        )
      }
    </List>
  </div>
);

RepoList.propTypes = {
  title: PropTypes.string.isRequired,
  repos: PropTypes.object,
};

RepoList.defaultProps = {
  repos: {},
};


export default RepoList;

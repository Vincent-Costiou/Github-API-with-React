import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

import Item from 'src/containers/Item';

import './index.scss';

const ResultList = ({ searchedRepos, lastResearch, searchResultMessage }) => (
  <div className="tabResult">

    <h2 id="researchResultMessage">{`${searchResultMessage} ${lastResearch}`}</h2>

    <List divided relaxed>
      {
        Object.keys(searchedRepos).length !== 0
        && (

          Object.keys(searchedRepos).map(key => (
            <Item repo={searchedRepos[key]} key={searchedRepos[key].id} />
          ))
        )
      }
    </List>
  </div>
);


ResultList.propTypes = {
  lastResearch: PropTypes.string.isRequired,
  searchResultMessage: PropTypes.string.isRequired,
  searchedRepos: PropTypes.object,
};

ResultList.defaultProps = {
  searchedRepos: {},
};


export default ResultList;

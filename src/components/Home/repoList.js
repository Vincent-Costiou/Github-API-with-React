import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import './index.scss';

const RepoList = ({ title, repos }) => (
  <div className="tabResult">
    <h2 id="title">{title}</h2>
    <List divided relaxed>
      {console.log('reposList', repos)}
      {console.log('reposList', Object.keys(repos).length)}
      {Object.keys(repos).length === 0 && (<p id="emptyListMessage">Il n'y a aucun repos dans cette liste</p>)}
      {
        Object.keys(repos).length !== 0
        && (

          Object.keys(repos).map(key => (
            <List.Item key={repos[key].id}>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as={Link} to="/repo">{repos[key].header}</List.Header>
                <List.Description>Date du dernier update : {repos[key].updatedAt}</List.Description>
              </List.Content>
            </List.Item>
          ))
        )
      }
    </List>
  </div>
);

// RepoList.propTypes = {
//   title: PropTypes.string.isRequired,
//   repos: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         header: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         updateAt: PropTypes.string.isRequired,
//       }),
//     ),
//   ),
// };

// RepoList.defaultProps = {
//   repos: {},
// };




export default RepoList;

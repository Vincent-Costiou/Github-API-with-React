import React from 'react';
import PropTypes from 'prop-types';

import RepoList from 'src/containers/RepoList';

import './index.scss';

const Welcome = ({ welcomeMessage, repos, favRepos }) => (
  <main id="welcome">
    <h1 id="welcomeMessage">{welcomeMessage}</h1>
    {console.log('repos', repos)}
    {console.log('favRepos', favRepos.length)}
    <div id="results">
      <RepoList title="Derniers Repos modifiés" repos={repos} />
      <RepoList title="Favoris" repos={favRepos} />
    </div>
  </main>
);

// Welcome.propTypes = {
//   welcomeMessage: PropTypes.string.isRequired,
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
//   favRepos: PropTypes.arrayOf(
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

// Welcome.defaultProps = {
//   repos: {},
//   favRepos: {},
// };

export default Welcome;

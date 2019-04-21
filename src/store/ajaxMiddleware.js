import axios from 'axios';
import { LOG_USER, SEARCH_FOR_REPOS, changeLoadingMessage, userLogged, searchReturnedResults } from './reducer';

const ajaxMiddleware = store => next => (action) => {

  const fetchGithubApi = (url) => {
    const token = store.getState().token;
    return axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
  };

  switch (action.type) {
    case LOG_USER:
      next(action);

      fetchGithubApi('https://api.github.com/user')
        .then((response) => {
          console.log('user', response.data);
          const user = response.data;
          const message = `Récupération des repos pour ${user.login}`;
          store.dispatch(changeLoadingMessage(message));
          fetchGithubApi('https://api.github.com/user/repos')
            .then((repoResponse) => {
              console.log('repos', repoResponse.data);
              const userRepos = repoResponse.data;
              const messageRepos = `Bonjour ${user.login}, nous avons récupéré ${userRepos.length} repos depuis votre compte`;
              store.dispatch(userLogged(messageRepos, user, userRepos));
            })
            .catch(((error) => {}));
        })
        .catch((error) => {});
      break;

    case SEARCH_FOR_REPOS:
      next(action);

      fetchGithubApi('https://api.github.com/user/repos?q=react')
        .then((response) => {
          console.log('research results', response.data);
          store.dispatch(searchReturnedResults(response.data));
        })
        .catch((error) => {});
      break;

    default:
      next(action);
      break;
  }
};

export default ajaxMiddleware;

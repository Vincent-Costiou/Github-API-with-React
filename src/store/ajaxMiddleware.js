import axios from 'axios';
import {
  LOG_USER,
  SEARCH_FOR_REPOS,
  changeLoadingMessage,
  userLogged,
  loginError,
  searchReturnedResults,
  searchError,
} from './reducer';

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
              const userRepos = repoResponse.data.map((repo) => {
                const year = repo.updated_at.substring(0, 4);
                const month = repo.updated_at.substring(7, 5);
                const day = repo.updated_at.substring(10, 8);

                const formattedDate = `${day}/${month}/${year}`;

                return {
                  id: repo.id,
                  header: repo.name,
                  url: `${repo.url}/contents`,
                  updatedAt: formattedDate,
                };
              });
              const messageRepos = `Bonjour ${user.login}`;
              store.dispatch(userLogged(messageRepos, user, userRepos));
            })
            .catch(((error) => {}));
        })
        .catch((error) => {
          store.dispatch(loginError());
        });
      break;

    case SEARCH_FOR_REPOS:
      next(action);

      axios.get(`https://api.github.com/search/repositories?q=${store.getState().currentResearch}`)
        .then((results) => {
          const formattedResults = results.data.items.map((repo) => {
            const year = repo.updated_at.substring(0, 4);
            const month = repo.updated_at.substring(7, 5);
            const day = repo.updated_at.substring(10, 8);

            const formattedDate = `${day}/${month}/${year}`;

            return {
              id: repo.id,
              header: repo.name,
              url: `${repo.url}/contents`,
              updatedAt: formattedDate,
            };
          });
          store.dispatch(searchReturnedResults(formattedResults));
        })
        .catch((error) => {
          store.dispatch(searchError());
        });
      break;

    default:
      next(action);
      break;
  }
};

export default ajaxMiddleware;

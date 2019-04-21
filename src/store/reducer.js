
const initialState = {
  loggedIn: false,
  loginError: false,
  token: '',
  loadingMessage: 'Saisissez votre token Github',
  welcomeMessage: '',
  loading: false,
  user: {},
  repos: [],
  currentResearch: '',
  lastResearch: '',
  searching: false,
  searchError: false,
  searchedRepos: [],
};

// Types
const ON_LOGOUT = 'ON_LOGOUT';
export const LOG_USER = 'LOG_USER';
const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
const CHANGE_LOADING_MESSAGE = 'CHANGE_LOADING_MESSAGE';
const USER_LOGGED = 'USER_LOGGED';
const LOGIN_ERROR = 'LOGIN_ERROR';
const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const SEARCH_FOR_REPOS = 'SEARCH_FOR_REPOS';
const SEARCH_RETURNED_RESULTS = 'SEARCH_RETURNED_RESULTS';
const SEARCH_ERROR = 'SEARCH_ERROR';


// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        token: action.token,
      };

    case LOG_USER:
      return {
        ...state,
        loading: true,
        loadingMessage: 'Connexion en cours',
      };

    case CHANGE_LOADING_MESSAGE:
      return {
        ...state,
        loadingMessage: action.text,
      };

    case USER_LOGGED:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        loadingMessage: '',
        welcomeMessage: action.welcomeMessage,
        user: { ...action.user },
        repos: { ...action.repos },
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
        loading: false,
      };

    case SEARCH_INPUT_CHANGE:
      return {
        ...state,
        currentResearch: action.research,
      };

    case SEARCH_FOR_REPOS:
      return {
        ...state,
        searching: true,
      };

    case SEARCH_RETURNED_RESULTS:
      return {
        ...state,
        searchedRepos: action.searchedRepos,
        lastResearch: state.research,
        currentResearch: '',
        searching: false,
      };

    case SEARCH_ERROR:
      return {
        ...state,
        searchError: true,
        searching: false,
      };

    case ON_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};


// Actions Creators
export const onLogout = () => ({
  type: ON_LOGOUT,
});

export const loginInputChange = token => ({
  type: LOGIN_INPUT_CHANGE,
  token,
});

export const logUser = () => ({
  type: LOG_USER,
});

export const changeLoadingMessage = text => ({
  type: CHANGE_LOADING_MESSAGE,
  text,
});

export const userLogged = (message, user, repos) => ({
  type: USER_LOGGED,
  welcomeMessage: message,
  user,
  repos,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const searchInputChange = research => ({
  type: SEARCH_INPUT_CHANGE,
  research,
});

export const searchForRepos = () => ({
  type: SEARCH_FOR_REPOS,
});

export const searchReturnedResults = searchedRepos => ({
  type: SEARCH_RETURNED_RESULTS,
  searchedRepos,
});

export const searchError = () => ({
  type: SEARCH_ERROR,
});

export default reducer;

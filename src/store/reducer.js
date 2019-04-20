
const initialState = {
  loggedIn: true,
  token: '',
  loadingMessage: 'Saisissez votre token Github',
  loading: false,
  user: {},
  repos: [],
};

// Types
const ON_LOGOUT = 'ON_LOGOUT';
export const LOG_USER = 'LOG_USER';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
const CHANGE_LOADING_MESSAGE = 'CHANGE_LOADING_MESSAGE';
const USER_LOGGED = 'USER_LOGGED';


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
        user: { ...action.user },
        repos: { ...action.repos },
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

export const userLogged = (user, repos) => ({
  type: USER_LOGGED,
  user,
  repos,
});

export default reducer;

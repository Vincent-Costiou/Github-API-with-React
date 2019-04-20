
const initialState = {
  loggedIn: true,
};

// Types
const ON_LOGOUT = 'ON_LOGOUT';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

export default reducer;

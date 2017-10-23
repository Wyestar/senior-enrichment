import axios from 'axios';

const initialState = {
  logStatus: false,
  adminStatus: false,
  username: ""
};

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';

export const getUser = (username, password) => dispatch => {
  axios.get(`/api/login?username=${username}&password=${password}`)
  .then(user => {
      return dispatch({
      type: LOGGED_IN,
      loggedIn: true,
      adminStatus: user.data.admin,
      username: user.data.username
    })
  })
}

export const logout = () => dispatch => {
  return dispatch({
    type: LOGGED_OUT
  })
}

export default function logReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOGGED_IN:
      newState.logStatus = action.loggedIn;
      newState.adminStatus = action.adminStatus;
      newState.username = action.username;
      return newState;
    case LOGGED_OUT:
      newState.logStatus = false;
      newState.adminStatus = false;
      newState.username = "";
      return newState;
    default:
      return state;
  }
}

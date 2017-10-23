import axios from 'axios';

const initialState = {
  logStatus: false,
  adminStatus: false
};

const LOGGED_IN = 'LOGGED_IN';

export const getUser = (username, password) => dispatch => {
  axios.get(`/api/login?username=${username}&password=${password}`)
  .then(user => {
    console.log(user)
    return dispatch({
    type: LOGGED_IN,
    loggedIn: true,
    adminStatus: user.data.admin
  })
})
}

export default function logReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case LOGGED_IN:
    console.log(action.adminStatus)
      newState.logStatus = action.loggedIn;
      newState.adminStatus = action.adminStatus;
      return newState;
    default:
      return state;
  }
}

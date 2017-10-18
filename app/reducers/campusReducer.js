// campusreducer

// thunk?
import axios from 'axios';

const initialState = {
  campus: {},
  campuses: []
};

const NEW_CAMPUS;
// bundle this action with NEW_STUDENT, otherwise two distinct reducers must be used.
// the student/campus association can properly put the inputs into the db

// action types
const VIEW_CAMPUS = 'VIEW_CAMPUS';
const VIEW_ALL_CAMPUSES = 'VIEW_ALL_CAMPUSES';

// action creators
function getCampus(campus) {
  return {
    type: VIEW_CAMPUS,
    campus: campus
  }
}

function getCampuses(campuses) {
  return {
    type: VIEW_ALL_CAMPUSES,
    campuses: campuses
  }
}

// thunk
const fetchCampus = () => dispatch => {
  axios.get('/api/campus')
  .then(res => res.data)
  .then(campus => dispatch(getCampus(campus)))
  .catch(err);
}

const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => dispatch(getCampuses(campuses)))
  .catch(err);
}




// reducer
function campusReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_CAMPUS:
      return action.campus;
    case VIEW_ALL_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}

export default campusReducer;

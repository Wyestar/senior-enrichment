import axios from 'axios';

const initialState = [];

// const NEW_CAMPUS;
// bundle this action with NEW_STUDENT, otherwise two distinct reducers must be used.
// the student/campus association can properly put the inputs into the db

// action types
// const VIEW_CAMPUS = 'VIEW_CAMPUS';
const VIEW_ALL_CAMPUSES = 'VIEW_ALL_CAMPUSES';

// action creators
// export function getCampus(campus) {
//   return {
//     type: VIEW_CAMPUS,
//     campus: campus
//   }
// }

export function getCampuses(campuses) {
  return {
    type: VIEW_ALL_CAMPUSES,
    campuses: campuses
  }
}

// thunk
// export const fetchCampus = () => dispatch => {
//   axios.get(`/api/campus/1`)
//   .then(res => res.data)
//   .then(campus => dispatch(getCampus(campus)))
// }

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => dispatch(getCampuses(campuses)))
}

// reducer
export default function campusReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    // case VIEW_CAMPUS:
    //   return action.campus;
    case VIEW_ALL_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}

// export default campusReducer;

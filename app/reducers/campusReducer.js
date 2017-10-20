import axios from 'axios';

const initialState = [];

const VIEW_ALL_CAMPUSES = 'VIEW_ALL_CAMPUSES';

export function getCampuses(campuses) {
  return {
    type: VIEW_ALL_CAMPUSES,
    campuses: campuses
  }
}

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => dispatch(getCampuses(campuses)))
}

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

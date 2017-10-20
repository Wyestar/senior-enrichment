import axios from 'axios';

const initialState = {};

const VIEW_CAMPUS = 'VIEW_CAMPUS';

export function getCampus(campus) {
  return {
    type: VIEW_CAMPUS,
    campus: campus
  }
}

export const fetchCampus = (campusId) => dispatch => {
  axios.get(`/api/campus/${campusId}`)
  .then(res => res.data)
  .then(campus => dispatch(getCampus(campus)))
}

export const newCampus = (name, image) => {
  return axios.post('/api/campus', {name, image});
};

export default function campusSingleReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}

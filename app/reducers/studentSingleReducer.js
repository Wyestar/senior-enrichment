import axios from 'axios';

const initialState = {};

const VIEW_STUDENT = 'VIEW_STUDENT';

export function getStudent(student) {
  return {
    type: VIEW_STUDENT,
    student: student
  }
}


export const fetchStudent = (studentId) => dispatch => {
  axios.get(`/api/student/${studentId}`)
  .then(res => res.data)
  .then(student => dispatch(getStudent(student)))
}

export const newStudent = (name, email, campusId) => {
  return axios.post('/api/student', {name, email, campusId});
};

export default function studentReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_STUDENT:
      return action.student;
    default:
      return state;
  }
}

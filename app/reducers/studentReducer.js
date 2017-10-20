import axios from 'axios';

const initialState = [];

const REMOVE_STUDENT = 'REMOVE_STUDENT';
const VIEW_ALL_STUDENTS = 'VIEW_ALL_STUDENTS';

export function getStudents(students) {
  return {
    type: VIEW_ALL_STUDENTS,
    students: students
  }
}

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)))
}

export const deleteStudent = (studentId) => dispatch => {
  axios.delete(`/api/student/${studentId}`)
  .then(res => res.data)
  .then(() => {
    fetchStudents()(dispatch)
  })
}

export default function studentReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_ALL_STUDENTS:
      return action.students
    default:
      return state;
  }
}

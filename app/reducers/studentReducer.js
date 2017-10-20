import axios from 'axios';

const initialState = [];

// action type
// const NEW_STUDENT = 'NEW_STUDENT';
// const REMOVE_STUDENT = 'REMOVE_STUDENT';
// const VIEW_STUDENT = 'VIEW_STUDENT';
const VIEW_ALL_STUDENTS = 'VIEW_ALL_STUDENTS';

// action creator
// function getStudent(student) {
//   return {
//     type: VIEW_STUDENT,
//     student: student
//   }
// }

export function getStudents(students) {
  return {
    type: VIEW_ALL_STUDENTS,
    students: students
  }
}

// thunk
// const fetchStudent = (student) => dispatch => {
//   axios.get(`/api/student/${student.id}`)
//   .then(res => res.data)
//   .then(student => dispatch(getStudent(student)))
//   .catch(err);
// }

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)))
}

// reducer
export default function studentReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_ALL_STUDENTS:
      return action.students;
    default:
      return state;
  }
}

// export default studentReducer;

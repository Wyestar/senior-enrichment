import axios from 'axios';

const initialState = {
  // only use student for displaying single student page, otherwise, when add
  // student form is submitted, add student into students array.
  student: {},
  students: []
};

// action type
const NEW_STUDENT = 'NEW_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const VIEW_STUDENT = 'VIEW_STUDENT';
const VIEW_ALL_STUDENTS = 'VIEW_ALL_STUDENTS';

// action creator
function getStudent(student) {
  return {
    type: VIEW_STUDENT,
    student: student
  }
}

function getStudents(students) {
  return {
    type: VIEW_ALL_STUDENTS,
    students: students
  }
}

// thunk
const fetchStudent = (student) => dispatch => {
  axios.get(`/api/student/${student.id}`)
  .then(res => res.data)
  .then(student => dispatch(getStudent(student)))
  .catch(err);
}

const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(getStudents(students)))
  .catch(err);
}

// reducer
function studentReducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case VIEW_STUDENT:
      return action.student;
    case VIEW_ALL_STUDENTS:
      return action.students;
    case NEW_STUDENT:
      return
    default:
      return state;
}

export default studentReducer;

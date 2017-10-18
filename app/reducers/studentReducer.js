// studentreducer
// keeping actions with reducers

// thunk?
import axios from 'axios';

const initialState = {
  student: {}
};

const NEW_STUDENT = 'NEW_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const VIEW_STUDENT = 'VIEW_STUDENT';

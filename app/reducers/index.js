import { combineReducers } from 'redux'
// import { studentReducer } from './studentReducer';
import campuses from './campusReducer';
import singlecampus from './campusSingleReducer';
import students from './studentReducer';
import singlestudent from './studentSingleReducer';

const rootReducer = combineReducers({ campuses, singlecampus, students, singlestudent });

export default rootReducer

import { combineReducers } from 'redux';
import campuses from './campusReducer';
import singlecampus from './campusSingleReducer';
import students from './studentReducer';
import singlestudent from './studentSingleReducer';
import log from './logReducer';

const rootReducer = combineReducers({ campuses, singlecampus, students, singlestudent, log });

export default rootReducer

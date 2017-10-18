import { combineReducers } from 'redux'
import StudentReducer from './studentReducer';
import CampusReducer from './campusReducer';

const rootReducer = combineReducers(StudentReducer, CampusReducer);

export default rootReducer

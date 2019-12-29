import { combineReducers } from 'redux';

// REDUCERS
import auth from './auth';
import blog from './blog';
import alert from './alert';

export default combineReducers({
  auth,
  blog,
  alert
});

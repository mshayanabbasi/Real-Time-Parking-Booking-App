import {combineReducers} from 'redux';
import authReducer from '../authReducer';
import userReducer from '../rootReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
});

export default rootReducer;

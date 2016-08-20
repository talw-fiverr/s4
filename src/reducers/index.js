import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import UserAuthReducer from './reducer_userAuth';

//application state
const rootReducer = combineReducers({
  groups:   SearchReducer,
  userAuth: UserAuthReducer
});

export default rootReducer;

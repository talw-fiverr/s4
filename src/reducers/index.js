import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

//application state
const rootReducer = combineReducers({
  groups: SearchReducer
});

export default rootReducer;

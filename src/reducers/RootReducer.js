import { combineReducers } from 'redux';
import displayGroup from './GroupReducer';
import displayProp from './PropReducer';
import data from './DataReducer';

const RootReducer = combineReducers({
  displayGroup,
  displayProp,
  data
});

export default RootReducer;
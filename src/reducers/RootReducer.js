import { combineReducers } from 'redux';
import displayGroup from './GroupReducer';
import displayProperty from './PropReducer';
import data from './DataReducer';

const RootReducer = combineReducers({
  displayGroup,
  displayProperty,
  data
});

export default RootReducer;
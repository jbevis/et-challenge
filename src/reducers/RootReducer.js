import { combineReducers } from 'redux';
import groups from './GroupReducer';
import properties from './PropReducer';
import data from './DataReducer';

const RootReducer = combineReducers({
  groups,
  properties,
  data
});

export default RootReducer;
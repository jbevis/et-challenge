import { combineReducers } from 'redux';
import groupToDisplay from './GroupReducer';
import propertyToDisplay from './PropReducer';
import data from './DataReducer';

const RootReducer = combineReducers({
  groupToDisplay,
  propertyToDisplay,
  data
});

export default RootReducer;
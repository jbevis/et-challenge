import { combineReducers } from 'redux';
import Groups from './GroupReducer';
import Properties from './PropReducer';

const RootReducer = combineReducers({
  Groups,
  Properties
});

export default RootReducer;
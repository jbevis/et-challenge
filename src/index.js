import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers/RootReducer';
import AppContainer from './containers/AppContainer';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
// const initialState = { 
//   displayGroup: 'generalInfo',
//   displayProperty: '',
//   data
// };
const store = createStore(RootReducer, devTools);

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
  );

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import { getProfiles } from './actions';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(getProfiles());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

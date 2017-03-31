import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default function initializeStore() {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}

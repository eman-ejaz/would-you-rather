import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import middleware from '../middleware/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(middleware));

export default store;

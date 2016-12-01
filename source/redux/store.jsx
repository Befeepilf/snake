import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers/index.jsx';
import logger from 'redux-logger';

let finalCreateStore = compose(
	applyMiddleware()
)(createStore);

let configureStore = function(initialState = {playboard: {}, snake: {}, food: {}}) {
	return finalCreateStore(reducer, initialState);
}

export default configureStore;
import {applyMiddleware, compose, createStore} from 'redux';
import reducer_game from './reducers/reducer_game.jsx';
import logger from 'redux-logger';

let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore);

let configureStore = function(initialState = {game: {}}) {
	return finalCreateStore(reducer_game, initialState);
}

export default configureStore;
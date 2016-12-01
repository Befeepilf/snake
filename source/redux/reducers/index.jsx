import {combineReducers} from 'redux';
import reducer_playboard from './reducer_playboard.jsx';
import reducer_snake from './reducer_snake.jsx';
import reducer_food from './reducer_food.jsx';

const reducer = combineReducers({
	playboard: reducer_playboard,
	snake: reducer_snake,
	food: reducer_food
});

export default reducer;
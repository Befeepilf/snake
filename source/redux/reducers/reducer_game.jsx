function addSegment(segments) {
	var x, y;
	if(segments.length > 1) {
		if(segments[segments.length - 1].y == segments[segments.length - 2].y) {
			if(segments[segments.length - 1].x < segments[segments.length - 2].x) {
				x = segments[segments.length - 1].x - 20;
				y = segments[segments.length - 1].y;
			}
			else {
				x = segments[segments.length - 1].x + 20;
				y = segments[segments.length - 1].y;
			}
		}
		if(segments[segments.length - 1].x == segments[segments.length - 2].x) {
			if(segments[segments.length - 1].y < segments[segments.length - 2].y) {
				y = segments[segments.length - 1].y - 20;
				x = segments[segments.length - 1].x;
			}
			else {
				y = segments[segments.length - 1].y + 20;
				x = segments[segments.length - 1].x;
			}
		}
	}
	else {
		x = segments[0].x;
		y = segments[0].y;
	}

	var segments_new = segments;
	segments_new.push({x: x, y: y});

	return segments;
}

let reducer_game = function(game = {}, action) {
	switch(action.type) {
		case 'SET_DIRECTION':
			var x, y;
			switch(action.direction) {
				case 'XB':
					x = game.snake.x - game.snake.speed;
					y = game.snake.y;
					break;
				case 'XF':
					x = game.snake.x + game.snake.speed;
					y = game.snake.y;
					break;
				case 'YB':
					x = game.snake.x;
					y = game.snake.y - game.snake.speed;
					break;
				case 'YF':
					x = game.snake.x;
					y = game.snake.y + game.snake.speed;
					break;
				default:
					x = game.snake.x;
					y = game.snake.y;
					break;
			}

			if(x == game.food.x && y == game.food.y) {
				var segments = addSegment(game.snake.segments);
				game.food.x = Math.floor(Math.random() * game.playboard.width / 20) * 20;
				game.food.y = Math.floor(Math.random() * game.playboard.height / 20) * 20;
			}
			else {
				var segments = game.snake.segments;
			}

			var segments_new = [];
			segments_new.push({x: x, y: y});
			segments_new = segments_new.concat(segments);
			segments_new.pop();

			var directions = {};
			for(var key in game.snake.directions) {
				directions[key] = (action.direction == key ? true : false);
			}

			return Object.assign({}, game, {snake: Object.assign({}, game.snake, {segments: segments_new, x: x, y: y, directions: directions})});		
		default:
			return game;
	}
}

export default reducer_game;
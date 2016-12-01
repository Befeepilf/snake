let reducer_snake = function(snake = {}, action) {
	switch(action.type) {
		case 'SET_DIRECTION':
			var x, y;
			switch(action.direction) {
				case 'XB':
					x = snake.x - snake.speed;
					y = snake.y;
					break;
				case 'XF':
					x = snake.x + snake.speed;
					y = snake.y;
					break;
				case 'YB':
					x = snake.x;
					y = snake.y - snake.speed;
					break;
				case 'YF':
					x = snake.x;
					y = snake.y + snake.speed;
					break;
				default:
					x = snake.x;
					y = snake.y;
					break;
			}

			var segments = [];
			segments.push({x: x, y: y});
			segments = segments.concat(snake.segments);
			segments.pop();

			var directions = {};
			for(var key in snake.directions) {
				directions[key] = (action.direction == key ? true : false);
			}

			return Object.assign({}, snake, {segments: segments, x: x, y: y, directions: directions});
		case 'ADD_SEGMENT':
			var x, y;
			if(snake.segments.length > 1) {
				if(snake.segments[snake.segments.length - 1].y == snake.segments[snake.segments.length - 2].y) {
					if(snake.segments[snake.segments.length - 1].x < snake.segments[snake.segments.length - 2].x) {
						x = snake.segments[snake.segments.length - 1].x - 20;
						y = snake.segments[snake.segments.length - 1].y;
					}
					else {
						x = snake.segments[snake.segments.length - 1].x + 20;
						y = snake.segments[snake.segments.length - 1].y;
					}
				}
				if(snake.segments[snake.segments.length - 1].x == snake.segments[snake.segments.length - 2].x) {
					if(snake.segments[snake.segments.length - 1].y < snake.segments[snake.segments.length - 2].y) {
						y = snake.segments[snake.segments.length - 1].y - 20;
						x = snake.segments[snake.segments.length - 1].x;
					}
					else {
						y = snake.segments[snake.segments.length - 1].y + 20;
						x = snake.segments[snake.segments.length - 1].x;
					}
				}
			}
			else {
				x = snake.segments[0].x;
				y = snake.segments[0].y;
			}

			var segments = snake.segments;
			segments.push({x: x, y: y});

			return Object.assign({}, snake, {segments: segments});
		default:
			return snake;
	}
}

export default reducer_snake;
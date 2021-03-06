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

	return Object.assign({}, segments, {segments: segments_new});
}

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

			if(x == food.x && x == food.y) {
				var segments = addSegment(snake.segments);
				alert();
			}
			else {
				var segments = snake.segments;
			}

			var segments_new = [];
			segments_new.push({x: x, y: y});
			segments_new = segments_new.concat(segments);
			segments_new.pop();

			var directions = {};
			for(var key in snake.directions) {
				directions[key] = (action.direction == key ? true : false);
			}

			return Object.assign({}, snake, {segments: segments_new, x: x, y: y, directions: directions});		
		default:
			return snake;
	}
}

export default reducer_snake;
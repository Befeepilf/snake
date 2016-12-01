let actions = {
	
	/*  Snake  */
	setDirection: function(direction) {
		return {
			type: 'SET_DIRECTION',
			direction: direction
		}
	},
	addSegment: function() {
		return {
			type: 'ADD_SEGMENT'
		}
	}
}

export default actions;
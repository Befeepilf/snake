let actions = {
	
	/*  Snake  */
	setDirection: function(direction) {
		return {
			type: 'SET_DIRECTION',
			direction: direction
		}
	}
}

export default actions;
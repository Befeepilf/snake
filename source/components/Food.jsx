import React from 'react';
import {Rect} from 'react-konva';

class Food extends React.Component {
	render() {
		return(
			<Rect
				x={this.props.food.x} y={this.props.food.y}
				width={20} height={20}
				fill={this.props.food.color}
			/>
		);
	}
}

export default Food;
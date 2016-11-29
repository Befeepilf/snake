import React from 'react';
import {Rect} from 'react-konva';

class Food extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			x: Math.floor((Math.random() * this.props.max_width) / 20) * 20,
			y: Math.floor((Math.random() * this.props.max_height) / 20) * 20,
			color: '#2E7D32'
		}
	}

	render() {
		return(
			<Rect
				x={this.state.x} y={this.state.y}
				width={20} height={20}
				fill={this.state.color}
			/>
		);
	}
}

export default Food;
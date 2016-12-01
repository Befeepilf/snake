import React from 'react';
import {Stage, Layer} from 'react-konva';
import $ from 'jquery';
import Snake from './Snake.jsx';
import Food from './Food.jsx';

class Playboard extends React.Component {
	render() {
		return(
			<Stage width={this.props.playboard.width} height={this.props.playboard.height} style={{background: this.props.playboard.color}}>
				<Layer>
					<Snake snake={this.props.snake} max_width={this.props.playboard.width} max_height={this.props.playboard.height} actions={this.props.actions}/>
					<Food food={this.props.food} max_width={this.props.playboard.width} max_height={this.props.playboard.height}/>
				</Layer>
			</Stage>
		);
	}
}

export default Playboard;
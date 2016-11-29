import React from 'react';
import {Stage, Layer} from 'react-konva';
import $ from 'jquery';
import Snake from './Snake.jsx';
import Food from './Food.jsx';

class Playboard extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			width: (Math.floor($('body').width() / 20) * 20),
			height: (Math.floor($('body').height() / 20) * 20)
		};
	}

	render() {
		return(
			<Stage width={this.state.width} height={this.state.height} style={{background: '#212121'}}>
				<Layer>
					<Snake max_width={this.state.width} max_height={this.state.height}/>
					<Food max_width={this.state.width} max_height={this.state.height}/>
				</Layer>
			</Stage>
		);
	}
}

export default Playboard;
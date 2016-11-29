import React from 'react';
import {Group, Rect} from 'react-konva';
import $ from 'jquery';

class Snake extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			segments: [{x: 110, y: 0}, {x: 100, y: 0}, {x: 80, y: 0}, {x: 60, y: 0}, {x: 40, y: 0}, {x: 20, y: 0}, {x: 0, y: 0}],
			x: 60,
			y: 0,
			speed: 20,
			color: '#FFFFFF',
			XF: false,
			XB: false,
			YF: false,
			YB: false
		}

		$(document).on('keydown', (event) => {
			switch(event.keyCode) {
				case 37:
					this.setState({
						XF: false,
						XB: true,
						YF: false,
						YB: false
					});
					this.setXB();
					break;
				case 38:
					this.setState({
						XF: false,
						XB: false,
						YF: false,
						YB: true
					});
					this.setYB();
					break;
				case 39:
					this.setState({
						XF: true,
						XB: false,
						YF: false,
						YB: false
					});
					this.setXF();
					break;
				case 40:
					this.setState({
						XF: false,
						XB: false,
						YF: true,
						YB: false
					});
					this.setYF();
					break;
				default:
					break;
			}
		});
	}

	setXF() {
		if(this.state.XF == true && (this.state.x + 20) < this.props.max_width) {
			this.setState({
				x: this.state.x + this.state.speed
			});
			setTimeout(() => {
				this.setFirstSegment();
				this.setXF();
			}, 100);
		}
	}

	setXB() {
		if(this.state.XB == true && this.state.x > 0) {
			this.setState({
				x: this.state.x + (-1 * this.state.speed)
			});
			setTimeout(() => {
				this.setFirstSegment();
				this.setXB();
			}, 100);
		}
	}

	setYF() {
		if(this.state.YF == true && (this.state.y + 20) < this.props.max_height) {
			this.setState({
				y: this.state.y + this.state.speed
			});
			setTimeout(() => {
				this.setFirstSegment();
				this.setYF();
			}, 100);
		}
	}

	setYB() {
		if(this.state.YB == true && this.state.y > 0) {
			this.setState({
				y: this.state.y + (-1 * this.state.speed)
			});
			setTimeout(() => {
				this.setFirstSegment();
				this.setYB();
			}, 100);
		}
	}

	setFirstSegment() {
		var new_segments = [];
		new_segments.push(this.state.segments[this.state.segments.length - 1]);
		new_segments[0].x = this.state.x;
		new_segments[0].y = this.state.y;
		new_segments = new_segments.concat(this.state.segments);
		new_segments.pop();
		this.setState({
			segments: new_segments
		});
	}

	render() {
		var segments = [];
		for(var i = 0; i < this.state.segments.length; i++) {
			segments.push(
				<Rect
					x={this.state.segments[i].x} y={this.state.segments[i].y}
					width={20} height={20}
					fill={this.state.color}
					stroke={'#000000'}
					strokeWidth={1}
					key={i}
				/>
			);
		}

		return(
			<Group>{segments}</Group>
		);
	}
}

export default Snake;
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import configureStore from '../redux/store.jsx';
import {Provider} from 'react-redux';
import $ from 'jquery';

let initialState = {
	playboard: {
		width: (Math.floor($('body').width() / 20) * 20),
		height: (Math.floor($('body').height() / 20) * 20),
		color: '#212121'
	},
	snake: {
		segments: [
			{
				x: 0,
				y: 0
			}
		],
		x: 0,
		y: 0,
		speed: 20,
		color: '#FFFFFF',
		directions: {
			XF: false,
			XB: false,
			YF: false,
			YB: false
		}
	}, 
	food: {
		color: '#FFFFFF', 
		x: 0, 
		y: 0
	}
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);

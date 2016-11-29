import React from 'react';
import {render} from 'react-dom';
import Playboard from './Playboard.jsx';

class App extends React.Component {
	render() {
		return(
			<Playboard/>
		);		
	}
}

render(<App/>, document.getElementById('app'));
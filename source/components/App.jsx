import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../redux/actions.jsx';
import Playboard from './Playboard.jsx';

class App extends React.Component {
	render() {
		return(
			<Playboard playboard={this.props.playboard} snake={this.props.snake} food={this.props.food} actions={this.props.actions}/>
		);		
	}
}

function mapStateToProps(state) {
	return state;
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
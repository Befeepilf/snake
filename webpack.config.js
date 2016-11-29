var webpack = require('webpack');
var path = require('path');

var dirs = {
	'build': path.resolve(__dirname, 'distribution'),
	'app': path.resolve(__dirname, 'source/components')
};

var config = {
	entry: dirs.app + '/index.jsx',
	output: {
		path: dirs.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: dirs.app,
				loader: 'babel'
			}
		]
	}
};

module.exports = config;
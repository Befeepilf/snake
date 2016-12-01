var webpack = require('webpack');
var path = require('path');

var dirs = {
	'build': path.resolve(__dirname, 'distribution'),
	'app': path.resolve(__dirname, 'source')
};

var config = {
	entry: dirs.app + '/components/index.jsx',
	output: {
		path: dirs.build,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				include: dirs.app,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};

module.exports = config;
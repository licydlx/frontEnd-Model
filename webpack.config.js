const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		perhp: './src/js/perhomepage.js',
		comdt: './src/js/comdetails.js'
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
	]
};
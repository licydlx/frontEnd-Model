const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

// const extractSCSS = new ExtractPlugin({
// 	filename: './css/[name].min.css',
// 	disable: false,
// 	allChunks: true
// });

// 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录
// const ASSET_PATH = process.env.ASSET_PATH || './';

module.exports = {
	// entry: './src/js/index.js',
	entry: {
		main: './src/js/index.js',
		vendor: [
			'lodash'
		]
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
			// publicPath: ASSET_PATH
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: ExtractPlugin.extract({
				fallback: 'style-loader',
				//resolve-url-loader may be chained before sass-loader if necessary
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Caching'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
		}),
		new ExtractPlugin({
			filename: './css/[name].[chunkhash].min.css'
		})

		// 该插件帮助我们安心地使用环境变量
		// new webpack.DefinePlugin({
		// 	'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
		// })
	],
};
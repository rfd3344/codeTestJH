const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

const devServerConfig = {
	port: 8000,
	open: true,
	hot: true,
	historyApiFallback: true,
	contentBase: path.join(__dirname, '../public'),
	host: 'localhost',
	publicPath: '/',
	filename: 'bundle.js',
};

const pluginsConfig = [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		template: './public/entry.html',
		filename: 'index.html',
		inject: 'body',
	}),
	new webpack.DefinePlugin({
		jhDebug: true,
	}),
];

module.exports = merge(webpackBaseConfig, {
	mode: 'development',
	devServer: devServerConfig,
	devtool: 'source-map',
	plugins: pluginsConfig,
});

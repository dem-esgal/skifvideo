var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'./index'
	],
	output: {
		path: path.join(__dirname, './../webapp/'),
		filename: 'bundle.min.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin("/styles.min.css"),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false }
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: [ 'babel' ],
			exclude: /node_modules/,
			include: __dirname
		},
			{ test: /\.png$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.svg$/, loader: "url-loader"},
			{
				test: /\.css$|\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}
			]
	}
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
	// Resolve Redux to source
	module.exports.resolve = { alias: { 'redux': reduxSrc } }
	// Compile Redux from source
	module.exports.module.loaders.push({
		test: /\.js$/,
		loaders: [ 'babel' ],
		include: reduxSrc
	})
}

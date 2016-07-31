var path = require('path');
var webModuleAbsPath = path.resolve('./web/node_modules');

const babelPresets = [
	require(webModuleAbsPath + '/babel-preset-es2015'),
	require(webModuleAbsPath + '/babel-preset-react'),
	require(webModuleAbsPath + '/babel-preset-react-native'),
	require(webModuleAbsPath + '/babel-preset-stage-0')
];

module.exports = {
	resolve: {
		root:  [
			webModuleAbsPath
		],
		alias: {
		       'react-native': 'react-native-web'
		}
	},
	resolveLoader: { 
		root: webModuleAbsPath // this helps to resolve loader names, e.g. 'babel-loader'
	},
	entry: [
		webModuleAbsPath + '/../../index.web.js'
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				presets: babelPresets 
			}
		]
	},
	output: {
		path: './web/bin',
		filename: 'app.bundle.js'
	}
};

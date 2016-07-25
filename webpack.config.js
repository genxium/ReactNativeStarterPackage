module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  entry: ['whatwg-fetch', './index.web.js'],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ["react-native", "es2015", "react", "stage-0"]
        }
      }
    ]
  },
  output: {
    path: './web/bin',
    filename: 'app.bundle.js'
  }
};

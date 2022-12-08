var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  // name of libs we want to include in vendor file
  'react', 'faker', 'lodash', 'redux', 'react-redux', 'react-dom',
  'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  // passing an object for multiple entry points
  entry: {
    bundle: './src/index.js',
    // separate bundle file for third party
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // name will be replaced as the key from entry node
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        /**
         * do not try to apply babel in any files inside node_modules
         * It will still work fine without this, but we need to 
         * prevent wasting of resources
         */
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // solves issue in double including
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      // move the html to src, automatically adds script tag on index.html for 
      // every Javascript file we generate
      template: 'src/index.html'
    })
  ]
};

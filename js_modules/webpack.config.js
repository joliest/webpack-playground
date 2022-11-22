const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    // save the bundle.js in our project directory and build folder
    path: path.resolve(__dirname, 'build'), // should be an absolute path. NOT relative path. use 'path' from node
    filename: 'bundle.js', // you can name this anything. This is just convention
  },
  module: {
    // loaders will be added here
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/, // regex expression, if the file ends with '.js', babel will be applies
      },
      {
        // use and loader are typically the same but the way how 'extract-text-webpack-plugin' is 
        // written, we need to use legacy
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/, // regex expression, if the file ends with '.css', babel will be applies
      }
    ]
  },
  plugins: [
    // find any files that were transformed by it's loader (css-loader) and saved
    // into a file called 'style.css'
    new ExtractTextPlugin('style.css'),
  ]
};

module.exports = config;
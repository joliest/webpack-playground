const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    // save the bundle.js in our project directory and build folder
    path: path.resolve(__dirname, 'build'), // should be an absolute path. NOT relative path. use 'path' from node
    filename: 'bundle.js', // you can name this anything. This is just convention
  },
};

module.exports = config;
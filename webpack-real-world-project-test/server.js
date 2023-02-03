const express = require('express');
const path = require('path');

const app = express();

// NODE_ENV should be set properly
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js')
  // use webpack when it's not production
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  // when running in production.
  // go the user and let the user to have access in the dist folder
  app.use(express.static('dist'))
  app.get('*', (req, res) => {
    // handling edge case, redirects when user enters invalid route
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  })
}

app.listen(process.env.PORT || 3050, () => {
  console.log('Listening . . .')
})
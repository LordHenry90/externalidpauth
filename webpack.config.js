// webpack.config.js
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
plugins: [
    new webpack.ProvidePlugin({
       process : 'process/browser'
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    }),
  ].filter(Boolean),
};
// webpack.config.js
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

module.exports = {
plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    }),
  ].filter(Boolean),
};
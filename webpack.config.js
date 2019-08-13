const path = require('path');
const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
};

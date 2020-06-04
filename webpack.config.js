// patch 'fs' to fix EMFILE errors, for example on WSL
var realFs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);

var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
  mode: 'production',
  entry: {
    horizontal: './shim/horizontal.js',
    vertical: './shim/vertical.js'
  },
  output: {
    library: 'ScratchBlocks',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  }
}];

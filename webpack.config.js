var HTMLWebpackPlugin = require('html-webpack-plugin');
// responsible for redirecting the requests to the newly generated
// JavaScript in the HTML
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});


module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    rules: [
      {
        // transforms all files with a .js file extension
        test: /\.js$/,
        // excludes all files in node modules
        exclude: /node_modules/,
        // loader to load in React into JavaScript code
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    // name of the transformed javascript
    filename: 'transformed.js',
    // path where it is saved
    path: __dirname + '/build'
  },
  plugins: [HTMLWebpackPluginConfig],
  node: {
    fs: "empty"
  }
};

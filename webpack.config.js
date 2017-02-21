// Can't believe I'm doing this, but I don't want to mess with RollUp right now,
// just need to be up and running.
var path = require('path');
module.exports = {
  entry: './src/client.js',
  output: {
    filename: 'public/js/scripts.js'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}

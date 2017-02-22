// Can't believe I'm doing this, but I don't want to mess with RollUp right now,
// just need to be up and running.
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("./public/css/styles.css"),
  ]
}

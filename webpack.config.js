
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.join(__dirname, "app"),
    filename: "bundle.js"
  },
  resolve: { root: [path.join(__dirname, "app")] },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel?presets[]=es2015"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
    ]
  },
  plugins: [
      new webpack.OldWatchingPlugin()
  ]
};

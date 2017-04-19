const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/main.jsx']
  },
  output: {
    path: path.resolve(__dirname, "./bundle/dist"),
    filename: 'bundle.js',
    publicPath: '/bundle/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'babel-plugin-react-html-attrs']
        }
      },
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader','sass-loader'],
            publicPath: '/bundle/css'
        })
      }
    ]
  },
  plugins: [
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
}
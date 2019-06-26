const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname,"/dist"),
    filename: "index.js"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"/src/index.html"),
      filename: "index.html"
    }),
  ],
  module:{
    rules:[
      {
        test:/\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	template: path.join(__dirname,'/src/index.html')
});



module.exports = {
  mode: 'development',
  
  entry: './src/index',
  output: {
    path: path.join(__dirname,'/dist'),
    filename:'index.js'
  },
	plugins:[
		htmlPlugin
	],
	module: {
		rules: [
      { 
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
		]
	}
};
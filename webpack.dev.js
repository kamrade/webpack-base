const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    print: './src/print.js',
    app: './src/index.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'src/index.pug'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.(scss|sass)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },{
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
'use strict'

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

var src = path.join(__dirname, 'src');

module.exports = function(env) {

  var config = {
    
    entry: {
      print: path.join(src, 'print.js'),
      app: path.join(src, 'index.js'),
    },

    devtool: env === 'dev' ? 'source-map' : false,

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(src, 'index.pug'),
        chunksSortMode: 'dependency',
        inject: 'body'
      })
    ],

    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    module: {
      rules: [
        // Babel
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.(pug|jade)$/,
          use: [
            {loader: 'pug-loader', options: { pretty: true }}
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }
  };

  // PRODUCTION ONLY
  if(env === 'prod') {
    
    console.log('--- PRODUCTION MODE ---');
    
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    );

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    );
  }

  if(env === 'devbuild') {
    console.log('--- BUILD FOR DEVELOPMENT MODE ---');
    config.devtool = 'source-map';
  }

  // DEVELOPMENT ONLY
  if(env === 'dev') {
    
    console.log('--- DEVELOPMENT MODE ---');
    
    config.devServer = {
      contentBase: './dist',
      hot: true,
      inline: true
    };
    config.plugins.push(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;

}
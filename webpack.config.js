const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = function(env) {

  var config = {
    entry: {
      print: './src/print.js',
      app: './src/index.js'
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        template: 'src/index.pug'
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

  // DEVELOPMENT ONLY
  if(env === 'dev') {
    
    console.log('--- DEVELOPMENT MODE ---');
    
    config.devtool = 'source-map';
    config.devServer = {
      contentBase: './dist',
      hot: true
    };
    config.plugins.push(new CleanWebpackPlugin(['dist']));
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;

}
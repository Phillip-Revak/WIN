const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
      app: "./javascript/index"
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loader: 'css-loader'}
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
            }
         }
        ]
      },
      devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
      }
  };
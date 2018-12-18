const { join, resolve } = require('path')
const Dotenv = require('dotenv-webpack')

const config = {
  entry: resolve('src', 'app.ts'),
  devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: resolve('build')
  },

  plugins: [
    new Dotenv({
      path: 'development.env',
      safe: false
    }),
  ],

};

module.exports = config

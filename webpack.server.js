
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const config = require('./webpack.base')

const serverConfig = {
  target: 'node', // 打包范围,服务器端 不需要全部打包,浏览器端 全部打包
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()], // 不会将模块打包到引入的包里
  module: {
    rules: [{
      test: /\.css?$/,
      use: [
        'isomorphic-style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            esModule: false,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }
        }
      ]
    }]
  }
}

module.exports = merge(config, serverConfig)
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: process.env.NODE_DEV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    compress: false,
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebPackPlugin({
      template: './src/template/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/module/handle-title.js'),
          to: path.resolve(__dirname, '../dist')
        }
      ]
    })
  ]
}

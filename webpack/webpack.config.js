const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.tsx'),
  mode: 'development',
  resolve: {
    extensions:['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '..', 'build')
  },
  module: {
    rules:[
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src/index.html')
    })
  ]
}
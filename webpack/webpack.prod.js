const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins:[
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Libório')
    }),
    new CleanWebpackPlugin()
  ]
};

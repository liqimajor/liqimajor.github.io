const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理垃圾文件

const vendors = [
  'vue',
  'vuex',
  'vue-router',
  'axios'
];

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'src/js'),
    filename: '[name].js',
    library: '[name]'
  },
  entry: {
    "lib": vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin([path.join(__dirname, 'build')]) // 每次打包之前清理打包目录
  ]
};

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理垃圾文件
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssConfig = [{
    loader: MiniCssExtractPlugin.loader,
    options: { publicPath: '../' }
}, {
    loader: 'css-loader',
    options: {
        minimize: true,
        sourceMap: false
    }
}, 'postcss-loader'];
const scssConfig = [{
        loader: MiniCssExtractPlugin.loader,
        options: { publicPath: '../' }
    },
    {
        loader: 'css-loader',
        options: {
            minimize: true,
            sourceMap: false
        }
    }, 'postcss-loader', {
        loader: 'sass-loader',
        options: {
            // 你也可以从一个文件读取，例如 `variables.scss`
            data: `$color: red;`
        }
    }
]

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash].js', // [name] 是entry的key
        publicPath: './'
    },
    devtool: 'source-map', // 如果只用source-map开发环境出现错误定位源文件，生产环境会生成map文件
    module: {
        rules: [{
                test: /\.css$/,
                use: cssConfig
            },
            {
                test: /\.scss$/,
                use: scssConfig
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, 'dist')]), // 每次打包之前清理打包目录
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'), // 引入模版
            filename: 'index.html',
            minify: { // 对index.html压缩
                collapseWhitespace: true, // 去掉index.html的空格
                removeAttributeQuotes: true // 去掉引号
            },
            hash: true // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
        }),
        new MiniCssExtractPlugin({ // 分离css
            filename: 'css/[name].[contenthash].css',
            // chunkFilename: isProd ? "css/[id].[contenthash].css" : '[id].css'
        }),
        new CopyWebpackPlugin([
          { from: 'src/js', to: 'js' }
        ])
    ]
});

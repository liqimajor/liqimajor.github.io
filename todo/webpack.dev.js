const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理垃圾文件
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue加载器

const cssConfig = [
    'vue-style-loader',
    {
        loader: 'css-loader',
        options: {
            minimize: false,
            sourceMap: true
        }
    }, 'postcss-loader'
];
const scssConfig = [
    'vue-style-loader',
    {
        loader: 'css-loader',
        options: {
            minimize: false,
            sourceMap: true
        }
    },
    'postcss-loader',
    {
        loader: 'sass-loader',
        options: {
            // 你也可以从一个文件读取，例如 `variables.scss`
            data: `$color: red;`
        }
    }
]

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map', // 如果只用source-map开发环境出现错误定位源文件，生产环境会生成map文件
    output: {
        filename: '[name].js', // [name] 是entry的key
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true, // 开启Gzip压缩
        host: 'localhost', // 设置服务器的ip地址，默认localhost
        port: 9001, // 端口号
        historyApiFallback: true, //所有的跳转指向index.html
        open: true, // 自动打开浏览器
        hot: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: cssConfig
            },
            {
                test: /\.scss$/,
                use: scssConfig
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin([path.join(__dirname, '')]), // 每次打包之前清理打包目录
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'), // 引入模版
            filename: 'index.html',
            minify: { // 对index.html压缩
                collapseWhitespace: false, // 去掉index.html的空格
                removeAttributeQuotes: false // 去掉引号
            },
            hash: true // 去掉上次浏览器的缓存（使浏览器每次获取到的是最新的html）
        }),
        new MiniCssExtractPlugin({ // 分离css
            filename: '[name].css',
            // chunkFilename: isProd ? "css/[id].[contenthash].css" : '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件 HMR
    ]
});

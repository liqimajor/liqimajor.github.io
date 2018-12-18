const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        // filename: 'main.js',
        filename: 'js/[name].[contenthash].js',
        // publicPath: "/assets/",
        // chunkFilename: '[name].bundle.js',//决定非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist')
    },
    resolve: { //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.css']
    },
    devServer: {
        inline: true,
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        outputPath: './assets/img/',
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: './assets/font/'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}
console.log("process.env.NODE_ENV 的值是(webpack.config.js)：" + process.env.NODE_ENV)

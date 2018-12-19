const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue加载器
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        main: './src/main.js', // 入口文件
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 打包目录
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: true, // 热重载
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { // 配置图片编译路径
                        limit: 8192, // 小于8k将图片转换成base64
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'images/'
                    }
                }, {
                    loader: 'image-webpack-loader', // 图片压缩
                    options: {
                        bypassOnDebug: true
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.(mp4|ogg)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss'], // import引入文件的时候不用加后缀
        modules: [ // 配置路径别名
            'node_modules', path.resolve(__dirname, 'src/components'), path.resolve(__dirname, 'src/assets')
        ]
    },
    plugins: [
        new VueLoaderPlugin(), // vue加载器
        new webpack.BannerPlugin(`xs build at ${new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}`), // 打包后在.js/.css页头的时间（并没什么卵用）
        new webpack.NamedModulesPlugin(), // 热更新 HMR
        new webpack.ProvidePlugin({ // 配置第三方库
            $http: 'axios' // 在.vue文件中可以使用$http发送请求，不用每次都import Axios from 'axios';也不用挂载到vue原型链上
        }),
        new BundleAnalyzerPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json'),
        }),
    ],
    optimization: {
        runtimeChunk: 'single', //提取runtime模板
        splitChunks: {
            cacheGroups: { // 这里开始设置缓存的 chunks
                commons: { // key 为entry中定义的 入口名称
                    chunks: 'all', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    test: /node_modules/, // 正则规则验证，如果符合就提取 chunk (指定是node_modules下的第三方包)
                    name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
                    minChunks: 1,
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
                // styles: {
                //     chunks: 'all',
                //     test: /\.css$/,
                //     name: 'vendor',
                //     enforce: true
                // }
            }
        }
    }
}

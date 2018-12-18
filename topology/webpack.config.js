var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");


module.exports = {
    entry: {
        htree: './htree.js'
    },
    output: {
        path: __dirname + '/bundle',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.html$/, loader: 'raw'},
            {test: /\.less$/, loader: 'style!raw!less'},
            {test: /\.(css)$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|ttf)$/, loader: 'url?limit=8192'}
        ]
    },
    resolve: {},
    plugins: [
        commonsPlugin,
        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "$": "jquery",
            "window.jQuery": "jquery",
            "echarts": "echarts"
        })
        // new UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require','$scope','$last','$emit','$timeout']
        //     }
        // })
    ]
};

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    // 输入文件
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, '../src/main.js')]
    },
    output: {
        // 输出目录
        path: path.resolve(__dirname, '../dist'),
        // 静态目录，可以直接从这里取文件
        publicPath: '/',
        // 文件名
        filename: 'js[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        }),
                        less: ExtractTextPlugin.extract({
                            use: 'css-loader!less-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                // 排除模块安装目录下的文件
                exclude: /node_modules/
            },
            {
                test: /\.png$|\.jpg$|\.gif$|\.ico$/,
                loader: "file-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        }),
        new ExtractTextPlugin("style.css")
    ]
}
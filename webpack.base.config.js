/**
 * Created by yumengya on 2017/7/23
 * 生产环境配置的打包文件
 */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:path.resolve(__dirname,'./src/app.js'),
    },
    output:{
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {test: /\.less/, use: ['style-loader','css-loader','less-loader']},
            // { test: /\.css$/, use: ['style-loader','css-loader'] },
            { test: /\.(png|jpg|jpeg)$/, use: ['url-loader']},
            {test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.scss','.less','jsonp']
    }
};
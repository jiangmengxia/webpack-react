/**
 * Created by yumengya on 2017/7/23
 * 开发环境配置的打包文件
 */
var webpack = require('webpack');
var path = require('path');
var px2rem = require('postcss-plugin-px2rem');
const utils = require('./util/utils')
const  config = require('./config')
const baseWebpackConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig,{
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.LoaderOptionsPlugin({
        //     options:{
        //         postcss: function() {
        //             return [px2rem({remUnit: 75})];
        //         },
        //     }
        // })
    ],
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },

    resolve: {
        extensions: [ '.js', '.json', '.scss','.less','jsonp'],
    },
    devServer:{
        inline:true,
        hot: true,
        port:3000,
        // host:'192.168.199.237'
    }
})
module.exports = devWebpackConfig
// module.exports = {
//     plugins: [
//       new webpack.optimize.ModuleConcatenationPlugin(),
//       new webpack.HotModuleReplacementPlugin(),
//         new webpack.LoaderOptionsPlugin({
//             options:{
//                 postcss: function() {
//                     return [px2rem({remUnit: 75})];
//                 },
//             }
//         })
//     ],
//    //  entry : {
//    //      main : path.resolve(__dirname,'./src/app.js'),
//    // },
//    //  output:{
//    //      path: path.resolve(__dirname,'./dev'),
//    //      filename: 'bundle.js'
//    //  },
//     module: {
//         rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
//     },
//
//     resolve: {
//         extensions: [ '.js', '.json', '.scss','.less','jsonp'],
//     },
//     devServer:{
//         inline:true,
//         hot: true,
//         port:3000,
//         // host:'192.168.199.237'
//     }
// };
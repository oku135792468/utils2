// const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
 
module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    plugins:[
        // new CleanWebpackPlugin(
        //     ['*.js'], //匹配删除的文件
        //     {
        //         root: path.join(__dirname, '../dist'),//根目录
        //         verbose:  true,//开启在控制台输出信息
        //         dry:      true //启用删除文件
        //     }
        // ),
    ],
});
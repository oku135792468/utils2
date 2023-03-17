const Env = require('./env.js');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'developer',
    devServer: {
        port:Env.port,//指定监听的端口号
        //host:'192.168.1.129',//默认是一个localhost.如果希望外部服务器可以访问，指点成自己的电脑的ip地址
        //compress:true,//一切服务都启用「gzip」压缩
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        open: true,
        progress:true,
        hot:true,//实现热加载   
        proxy: {
            '/py': {
                target: Env.proxyUrl,
                pathRewrite: {'^/py' : ''},
                timeout:180000
            }
        }
    }
});
module.exports = {
    entry: './utils/util.js',
    output: {
        filename: "./gateway-util/gateway-util.js"
    },
    performance: { // 关闭性能提示
        hints: false,
    },
};
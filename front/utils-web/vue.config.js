const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法检查
    lintOnSave: true,
    productionSourceMap: false,
    devServer: {
        port: "10086",
        proxy: {
            "/api/": {
                target: "http://10.2.39.18:7879/api", // 测试地址
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/api": "" }
            },
            "/gateway/": {
                target: "http://10.2.39.25:20003", // 测试地址
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/gateway": "" }
            },
            "/cardSearch/": {
                target: "http://10.2.39.26:10010", // 测试地址
                changeOrigin: true,
                secure: false,
                pathRewrite: { "^/cardSearch": "" }
            },
            "/mockApi/": {
                target: "http://localhost:3721/", // mock地址
                changeOrigin: true,
                pathRewrite: { "^/mockApi/": "" }
            }
        }
    }
})


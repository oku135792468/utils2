const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法检查
    lintOnSave: true,
    productionSourceMap: false
})


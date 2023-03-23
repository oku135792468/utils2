import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'

import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import dhccGateWayUtils from "./js/gateway-util"

const Vue = createApp(App)

Vue.use(ElementPlus)
Vue.use(router)

let options = {
    baseUrl: '/gateway', //自定义代理路径
    chnlCode: 'C0000403-T', //渠道APPCode 用于获取token
    chnlSecret: '8aa539d33afe449aa41dd29b3351b969', // 渠道密钥  用于获取token
    txBrNo: 'BOP-2021120714400', // 渠道号
    encryptEnabled: 'true',  // 是否开启加密
    productId: '1678455010133',  // 场景ID
    encryptAlgo: 'SM4', // 加密方式
    encryptType: 1, // 加密类型
    clientEncryptPrivateKey: '00AC0ABA758411CF7E45B2C9CEE37314526E49647FCCCEA77A1765D5E1B7B7B8D1', //平台解密私钥
    serverEncryptPublicKey: '040D4217DDD92324530EC0F901B201A45378476942B00E2DDC3F01A310267658A73C546683D91BBCCDA04AC55494115F440B014C1F38E16B2D537DF9C5E37F00DF', // 服务加密公钥
    clientSignPrivateKey: '00AC0ABA758411CF7E45B2C9CEE37314526E49647FCCCEA77A1765D5E1B7B7B8D1', //平台验签私钥
    serverSignPublicKey: '048B3E6BFC82F4BC1779F4EBDD1E7EE02149C7401DAA01F4EF9432997EF2F4A93AFB472B04657DDCBCD6FED36C1DC945DE9F247DB1E8716944C89E8FD6AE127E7A' //服务加签公钥
}

dhccGateWayUtils.init(options) // 初始化sdk数据，并获取token

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    Vue.component(key, component)
}

Vue.mount('#app')

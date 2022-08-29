import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'

import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const Vue = createApp(App)

Vue.use(ElementPlus)
Vue.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    Vue.component(key, component)
}

Vue.mount('#app')

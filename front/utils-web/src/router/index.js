import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/pages/Home";
// import SelectTable from "@/pages/SelectTable";
// import Scroll from "@/pages/Scroll";
// import entry from "@/components/HelloWorld";
// import CodeMsg from "@/components/CodeMsg";
import GatewayDemo from "@/pages/GatewayDemo";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "/gatewayDemo",
                    name: "gatewayDemo",
                    component: GatewayDemo,
                    meta: {
                        icon: 'CreditCard',
                        menuTitle: '网关SDK_Demo'
                    },
                },
                // {
                //     path: "/selectTable",
                //     name: "selectTable",
                //     component: SelectTable,
                //     meta: {
                //         icon: 'CreditCard',
                //         menuTitle: '测试列表'
                //     },
                // },
                // {
                //     path: "/entry",
                //     name: 'entry',
                //     component: entry,
                //     meta: {
                //         icon: 'Magnet',
                //         menuTitle: 'url加密'
                //     },
                // },
                // {
                //     path: "/Scroll",
                //     name: 'Scroll',
                //     component: Scroll,
                //     meta: {
                //         icon: 'Magnet',
                //         menuTitle: '转'
                //     },
                // },
                // {
                //     path: "/CodeMsg",
                //     name: 'CodeMsg',
                //     component: CodeMsg,
                //     meta: {
                //         icon: 'Magnet',
                //         menuTitle: '二维码处理'
                //     },
                // },
            ],
        },
    ]
});

export default router

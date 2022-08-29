import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/pages/Home";
import SelectTable from "@/pages/SelectTable";
import Scroll from "@/pages/Scroll";
import entry from "@/components/HelloWorld";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "/selectTable",
                    name: "selectTable",
                    component: SelectTable,
                    meta: {
                        icon: 'CreditCard',
                        menuTitle: '测试列表'
                    },
                }, {
                    path: "/entry",
                    name: 'entry',
                    component: entry,
                    meta: {
                        icon: 'Magnet',
                        menuTitle: 'url加密'
                    },
                },{
                    path: "/Scroll",
                    name: 'Scroll',
                    component: Scroll,
                    meta: {
                        icon: 'Magnet',
                        menuTitle: '转'
                    },
                },
            ],
        },
    ]
});

export default router

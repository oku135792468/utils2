<template>
    <div>
        <el-menu
                :style="{height: height}"
                active-text-color="#ffd04b"
                background-color="#545c64"
                text-color="#fff"
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="false"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-menu-item v-for="(item,index) in routes" @click="menuClick(item)" :index="index">
                <el-icon>
                    <component :is="item.meta.icon"/>
                </el-icon>
                {{item.meta.menuTitle}}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Sider",
        data() {
            return {
                isCollapse: false,
                height: '100%'
            }
        },
        mounted() {
            this.height = document.getElementById('app').offsetHeight + 'px';
            window.addEventListener("resize", () => {
                this.height = document.getElementById('app').offsetHeight + 'px';
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath)
            },
            menuClick(e) {
                if (this.$route.path !== e.path) {
                    this.$router.push(e.path);
                }
            }
        },
        computed: {
            routes() {
                return this.$router.options.routes[0].children;
            }
        }
    }
</script>

<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>

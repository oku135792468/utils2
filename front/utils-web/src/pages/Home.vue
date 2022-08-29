<template>
    <div class="bg">
        <el-container>
            <!--            <el-header height="100px" style="padding: 0px;">-->
            <!--                <div class="myHeader">-->
            <!--                    通用工具-->
            <!--                </div>-->
            <!--            </el-header>-->
            <el-container>
                <el-aside width="200px">
                    <Sider/>
                </el-aside>
                <el-container>
                    <el-main>
                        <keep-alive>
                            <router-view/>
                        </keep-alive>
                    </el-main>
                    <!--                    <el-footer>Footer</el-footer>-->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Sider from '/src/components/Sider'

    export default {
        name: "Home",
        components: {
            Sider
        },
        mounted() {
            // console.log('11111111111', this.$router)
            // this.$router.push('/selectTable')
        },
        methods: {}
    }
</script>

<style scoped>
    /*.myHeader {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center;*/
    /*    background: url("../assets/splman.jpg") repeat;*/
    /*    background-size: cover;*/
    /*}*/

</style>

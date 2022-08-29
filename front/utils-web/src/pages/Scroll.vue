<template>
    <div>
<!--        <div style="width: 500px;height: 500px;border-radius: 50%;transform: rotate(0grad);">-->
<!--            <el-row>-->
<!--                <el-col :span="12">-->
<!--                    <div style="width: 100%;height: 250px;background-color: red;"></div>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                    <div style="width: 100%;height: 250px;background-color: #aa5fff;"></div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--            <el-row>-->
<!--                <el-col :span="12">-->
<!--                    <div style="width: 100%;height: 250px;background-color: #5aff4b;"></div>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                    <div style="width: 100%;height: 250px;background-color: #3742ff;"></div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </div>-->
<!--        <div style="transform: rotate(270grad);background-color: black;width: 20px;height: 100px;position: fixed;"></div>-->
    </div>
</template>

<script>
    const sccbaJsApi = require("../js/sccba-js-api.min-v2.1.20220607")

    export default {
        name: "Scroll",
        mounted() {
            console.log(sccbaJsApi)
        }
    }
</script>

<style scoped>

</style>

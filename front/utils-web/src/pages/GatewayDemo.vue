<template>
  <div>
    <el-form>
      <el-row>
        <el-col :offset="8" :span="8">
          <el-form-item :label="'姓名'">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button @click="submit">查询</el-button>
  </div>
</template>

<script>
import {gatewayPost} from "@/js/gateway-util";

export default {
  name: "GatewayDemo",
  data(){
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    submit() {
      let res = gatewayPost('/presentationOfHH/queryCardInfo', {
        data: this.form, // 原始json参数
        version: '1.0.0', // 对接接口版本号
        code: 'A0556' // 对接接口CODE
      })
      // 响应内容 promise形式
      res.then((res) => {
        console.log('res', res)
      })
    }
  }
}
</script>

<style scoped>

</style>
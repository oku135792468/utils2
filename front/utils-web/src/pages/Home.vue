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
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </router-view>
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
  name: "MyHome",
  components: {
    Sider
  },
  async mounted() {

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

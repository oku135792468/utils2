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
    // import gatewayUtil from '/src/js/gateway-util'
    const dhccGateWayUtils = require('/src/js/gateway-util')

    export default {
        name: "Home",
        components: {
            Sider
        },
      mounted() {
        let options = {
          baseUrl: '/gateway',
          chnlCode: 'C0000403-T',
          chnlSecret: '8aa539d33afe449aa41dd29b3351b969',
          txBrNo: 'BOP-2021120714400',
          encryptEnabled: 'true',
          productId: '1678455010133',
          encryptAlgo: 'SM4',
          encryptType: 1,
          clientEncryptPrivateKey: '00AC0ABA758411CF7E45B2C9CEE37314526E49647FCCCEA77A1765D5E1B7B7B8D1',
          serverEncryptPublicKey: '040D4217DDD92324530EC0F901B201A45378476942B00E2DDC3F01A310267658A73C546683D91BBCCDA04AC55494115F440B014C1F38E16B2D537DF9C5E37F00DF',
          clientSignPrivateKey: '00AC0ABA758411CF7E45B2C9CEE37314526E49647FCCCEA77A1765D5E1B7B7B8D1',
          serverSignPublicKey: '048B3E6BFC82F4BC1779F4EBDD1E7EE02149C7401DAA01F4EF9432997EF2F4A93AFB472B04657DDCBCD6FED36C1DC945DE9F247DB1E8716944C89E8FD6AE127E7A'
        }
        dhccGateWayUtils.init(options)
        let data = {}
        let res = dhccGateWayUtils.gatewayPost('/prod/P003/spayb/A0565/V1.0.0', {
          data,
          version: '1.0.0',
          code: 'A0565'
        })

        res.then((res) => {
          console.log('res', res)
        })
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

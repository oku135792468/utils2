// 是否开发环境
const isDev = process.env.NODE_ENV === 'development'

// 是否打印请求日志
export const consoleRequestLog = isDev

// 请求基地址
export const baseUrl = process.env.MOCK ? '/mockApi' : '/platform/gateway'

export const chnlCode = 'C0000406'
export const chnlSecret = '296683ce592b46ee97eb322bba8ef082'
export const txBrNo = 'BOP-2021022710900'
export const encryptAlgo = 'SM4'        //报文加解密算法
export const encryptEnabled = 'true'     //开启报文加解密
export const encryptType = 1    //开启报文加解密
export const productId = '1678455010133'    //开启报文加解密

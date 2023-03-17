import {getSM4Key, sm4Decrypt, sm4Encrypt} from "./sm4-utils";
import {sm2Decrypt, sm2DoSignature, sm2DoVerifySignature, sm2Encrypt} from "./sm2-utils";
import moment from "moment";
import axios from "axios";
import './sm-crypto/sm2'

let requestOptions = {
    baseUrl: '',
    chnlCode: '',
    chnlSecret: '',
    txBrNo: '',
    encryptAlgo: '',        //报文加解密算法
    encryptEnabled: '',     //开启报文加解密
    encryptType: '',    //开启报文加解密
    productId: '',    //开启报文加解密
    clientEncryptPrivateKey: '',
    serverEncryptPublicKey: '',
    clientSignPrivateKey: '',
    serverSignPublicKey: '',
}

let gatewayToken = ''

let config = {
    header: {
        'Content-Type': 'application/json',
    }
}

/**
 *
 * @param initParams
 * @param sendConfig
 */
exports.init = (initParams, sendConfig) => {
    requestOptions = {
        ...requestOptions,
        ...initParams
    }

    config = {
        ...config,
        ...sendConfig
    }

    axios.get(`${requestOptions.baseUrl}/auth/oauth/token?grant_type=client_credentials&client_id=${requestOptions.chnlCode}&client_secret=${requestOptions.chnlSecret}`).then(res => {
        if (res.data.access_token) {
            gatewayToken = res.data.access_token
            console.log('网关工具初始化成功!')
        } else {
            console.error('网关工具初始化失败!', res.data.responseData?.sysHead?.retMsg)
        }
    }).catch((err) => {
        console.error('网关工具初始化失败!', err)
    })
}

exports.gatewayPost = function (url, params, otherPostConfig) {
    let param = {}
    if (requestOptions.encryptAlgo === 'SM4') {
        let encodeKey = getSM4Key()
        let requestData = sm4Encrypt(JSON.stringify(params.data), encodeKey)
        param = {
            "chnlCode": requestOptions.chnlCode,
            "encodeKey": requestOptions.encryptEnabled ? '04' + sm2Encrypt(encodeKey, requestOptions.serverEncryptPublicKey, requestOptions.encryptType) : null,
            "encryptAlgo": requestOptions.encryptAlgo,
            "requestData": requestData,
            "requestId": getSM4Key() + getSM4Key(),
            "serviceCode": params.code,
            "timeStamp": new moment().format("YYYY-MM-DD HH:mm:ss"),
            "txBrNo": requestOptions.txBrNo,
            "version": params.version
        }
        let paramStr = sortParms(param)
        param.sign = sm2DoSignature(paramStr, requestOptions.clientSignPrivateKey)
        param.access_token = gatewayToken
    }
    return axios.post(`${requestOptions.baseUrl}/${url}`, param, {...config, ...otherPostConfig}).then(res => {
        let responseData = res.data
        if (responseData.responseData.sysHead) {
            return responseData.responseData.sysHead
        }
        let oldParams = {...responseData}
        delete responseData.sign
        let paramstr = sortParms(responseData)
        if (sm2DoVerifySignature(paramstr, oldParams.sign, requestOptions.serverSignPublicKey)) {
            let encodeKey = sm2Decrypt(responseData.encodeKey.substring(2), requestOptions.clientEncryptPrivateKey, requestOptions.encryptType)
            return JSON.parse(sm4Decrypt(responseData.responseData, encodeKey))
        } else {
            console.error('验签失败！')
            return null;
        }
    }).catch(err => {
        console.error('网关请求失败!', err)
        return err;
    })
}

/**
 *
 * @param params
 * @param key
 * @returns {{encryptAlgo: string, timeStamp: string, chnlCode: string, serviceCode: *, requestId: string, txBrNo: string, requestData: String, encodeKey: (string|null), version}}
 */
export function gatewayEncrypt(params, key) {
    let encodeKey = key || getSM4Key()
    let requestData = sm4Encrypt(JSON.stringify(params.data), encodeKey)
    let param = {
        "chnlCode": requestOptions.chnlCode,
        "encodeKey": requestOptions.encryptEnabled ? '04' + sm2Encrypt(encodeKey, requestOptions.serverEncryptPublicKey, requestOptions.encryptType) : null,
        "encryptAlgo": requestOptions.encryptAlgo,
        "requestData": requestData,
        "requestId": getSM4Key() + getSM4Key(),
        "serviceCode": params.code,
        "timeStamp": new moment().format("YYYY-MM-DD HH:mm:ss"),
        "txBrNo": requestOptions.txBrNo,
        "version": params.version
    }
    let paramStr = sortParms(param)
    param.sign = sm2DoSignature(paramStr, requestOptions.clientSignPrivateKey)
    param.access_token = sessionStorage.getItem('access_token')
    return param
}


function sortParms(params) {
    let keyList = Object.keys(params).sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })

    let parammStr = ''
    keyList.map((item) => {
        parammStr = parammStr + `${item}=${params[item]}&`
    })

    return parammStr.substring(0, parammStr.length - 1)
}

/**
 *
 * @param params
 * @returns {null|any}
 */
exports.gatewayDecrypt = function (params) {
    let oldParams = {...params}
    delete params.sign
    let paramstr = sortParms(params)
    if (sm2DoVerifySignature(paramstr, oldParams.sign, requestOptions.serverSignPublicKey)) {
        let encodeKey = sm2Decrypt(params.encodeKey.substring(2), requestOptions.clientEncryptPrivateKey, requestOptions.encryptType)
        return JSON.parse(sm4Decrypt(params.responseData, encodeKey))
    } else {
        return null;
    }
}

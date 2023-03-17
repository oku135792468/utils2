 import { sm4 as SM4} from 'gm-crypt'

export function sm4Encrypt(plaintext, key) {

  let sm4Config = {
    key: key,
    mode: 'ecb',
    iv: null, // default is null
    cipherType: 'base64' // default is base64
  }
  let sm4 = new SM4(sm4Config)

  return sm4.encrypt(plaintext)
  // return window.sm4.encrypt(plaintext, key, sm4Config)

}

export function sm4Decrypt(ciphertext, key) {
  let sm4Config = {
    key: key,
    mode: 'ecb',
    iv: null, // default is null
    cipherType: 'base64' // default is base64
  }
  let sm4 = new SM4(sm4Config)

  return sm4.decrypt(ciphertext)
  // return window.sm4.decrypt(ciphertext, key, sm4Config)
}



export function  getSM4Key() {
  //生成随机数
  let num = '';
  for(let i=0;i<16;i++){//循环输出四位验证码
    let tmp =  Math.ceil((Math.random() * 15));//取出一位十六进制的整数
    if(tmp > 9){//依次判断随机数
      switch(tmp){
        case(10)://如果随机数等于10，换为a
          num += 'a';
          break;
        case(11):
          num += 'b';//如果随机数等于11，换为b
          break;
        case(12):
          num += 'c';//如果随机数等于12，换为c
          break;
        case(13):
          num += 'd';//如果随机数等于13，换为d
          break;
        case(14):
          num += 'e';//如果随机数等于14，换为e
          break;
        case(15):
          num += 'f';//如果随机数等于15，换为f
          break;
      }
    }else{
      num += tmp;
    }
  }
  return num
}

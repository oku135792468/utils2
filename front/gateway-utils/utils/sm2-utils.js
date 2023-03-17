export function getSm2Key() {
  return window.sm2.generateKeyPairHex();
}

export function sm2Encrypt(msgString, publicKey, cipherMode) {
  return window.sm2.doEncrypt(msgString, publicKey, cipherMode);
}

export function sm2Decrypt(encryptData, priKey, cipherMode) {
  return window.sm2.doDecrypt(encryptData, priKey, cipherMode);
}
//msg： 加签内容 /验签原文
// privateKey: 加签私钥
export function sm2DoSignature (msg, privateKey) {
  return window.sm2.doSignature(msg, privateKey, {
    der: true,
    hash: true,
  });
}
// publicKey: 验签公钥
// sigValueHex: 验签内容
export function sm2DoVerifySignature (msg, sigValueHex, publicKey) {
  return window.sm2.doVerifySignature(msg, sigValueHex, publicKey, {
    der: true,
    hash: true,
  });
}


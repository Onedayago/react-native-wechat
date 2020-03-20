const CryptoJS = require("crypto-js");

export function sort(a, b) {
  return a > b ? `${a}-${b}` : `${b}-${a}`; // 大的放前面
}

const key = 'thisiskey'

// Encrypt 加密
export function encrypt(text){
  return CryptoJS.AES.encrypt(text, key).toString();
}


// Decrypt 解密
export function decrypt(cipherText){
  let bytes = CryptoJS.AES.decrypt(cipherText, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}


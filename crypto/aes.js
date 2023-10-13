const crypto = require('crypto');

// Your secret key for encryption
const secretKey = 'YourSecretKeyHere';

// Encryption function
function aesEncrypt(text, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return 'Encrypted: ' + encrypted;
}

// Decryption function
function aesDecrypt(encryptedText, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return 'Decrypted: ' + decrypted;
}


export { aesEncrypt, aesDecrypt };
//npm install js-sha256
const sha256 = require('js-sha256');

//using sha256 to encrypt inputString into Hashed String

//SHA-256 is a cryptographic hash function, not an encryption algorithm
//thus there's no use of private or public keys.

function sha256Encryption(inputString) {
  return sha256(inputString);
}

//for inputing it in app.js just use import sha256Encryption from '../crypto/sha256.js';

export default sha256Encryption;


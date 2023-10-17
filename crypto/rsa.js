const crypto = require("crypto")
const fs = require("fs")

/* 
i) to generate private key. (i've used "hello" as a pass phrase)
openssl genpkey - algorithm RSA - out private.pem - aes256 
ii) to generate public key
openssl rsa -pubout -in private.pem -out public.pem
*/

// Read the public and private keys (will be stored in keys directory)
const publicKey = fs.readFileSync("keys/public.pem", "utf8");
const privateKey = fs.readFileSync("keys/private.pem", "utf8");

// function for RSA encryption
function rsaEncrypt(inputString) {
    const bufferData = Buffer.from(inputString);
    const encrypted = crypto.publicEncrypt(publicKey, bufferData);
    return encrypted.toString("base64");
}

// function for RSA decryption
function rsaDecrypt(encryptedString) {
    const bufferData = Buffer.from(encryptedString, "base64");
    const decrypted = crypto.privateDecrypt({
        key: privateKey,
        passphrase: "hello", // choice of yours
    }, bufferData);
    return decrypted.toString("utf8");
}

// Export the functions
export { rsaEncrypt, rsaDecrypt };

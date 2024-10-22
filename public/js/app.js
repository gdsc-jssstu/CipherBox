// AES encryption function using CryptoJS
function aesEncrypt(inputString) {
    return CryptoJS.AES.encrypt(inputString, 'secret-key').toString();
}

// AES decryption function using CryptoJS
function aesDecrypt(encryptedString) {
    const bytes = CryptoJS.AES.decrypt(encryptedString, 'secret-key');
    return bytes.toString(CryptoJS.enc.Utf8);
}

// MD5 hashing function (no decryption)
function md5Hash(inputString) {
    return CryptoJS.MD5(inputString).toString();
}

// SHA-256 hashing function (no decryption)
function sha256Hash(inputString) {
    return CryptoJS.SHA256(inputString).toString();
}

// RSA encryption using JSEncrypt
function rsaEncrypt(inputString) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey('YOUR_PUBLIC_KEY_HERE');
    return encrypt.encrypt(inputString);
}

// RSA decryption using JSEncrypt
function rsaDecrypt(encryptedString) {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey('YOUR_PRIVATE_KEY_HERE');
    return decrypt.decrypt(encryptedString);
}

// DES encryption using CryptoJS
function desEncrypt(inputString) {
    return CryptoJS.DES.encrypt(inputString, 'secret-key').toString();
}

// DES decryption using CryptoJS
function desDecrypt(encryptedString) {
    const bytes = CryptoJS.DES.decrypt(encryptedString, 'secret-key');
    return bytes.toString(CryptoJS.enc.Utf8);
}

// Encryption handler based on algorithm
function encryptString(algorithm, inputString) {
    if (algorithm === 'AES') {
        return aesEncrypt(inputString);
    } else if (algorithm === 'MD5') {
        return md5Hash(inputString);
    } else if (algorithm === 'SHA-256') {
        return sha256Hash(inputString);
    } else if (algorithm === 'RSA') {
        return rsaEncrypt(inputString);
    } else if (algorithm === 'DES') {
        return desEncrypt(inputString);
    } else {
        return 'Unsupported algorithm';
    }
}

// Decryption handler based on algorithm
function decryptString(algorithm, encryptedString) {
    if (algorithm === 'AES') {
        return aesDecrypt(encryptedString);
    } else if (algorithm === 'RSA') {
        return rsaDecrypt(encryptedString);
    } else if (algorithm === 'DES') {
        return desDecrypt(encryptedString);
    } else {
        return 'Unsupported algorithm for decryption';
    }
}

// Event listeners
document.getElementById('encryptButton').addEventListener('click', function () {
    const algorithm = document.getElementById('algorithmSelector').value;
    const inputString = document.getElementById('input').value;
    const encryptedResult = encryptString(algorithm, inputString);
    document.getElementById('encryptedResult').textContent = encryptedResult;
});

document.getElementById('decryptButton').addEventListener('click', function () {
    const algorithm = document.getElementById('algorithmSelector').value;
    const encryptedString = document.getElementById('encryptedResult').textContent;
    const decryptedResult = decryptString(algorithm, encryptedString);
    document.getElementById('decryptedResult').textContent = decryptedResult;
});

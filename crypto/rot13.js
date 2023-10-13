// ROT13 Encryption function
function rot13Encrypt(text) {
  return text.replace(/[a-zA-Z]/g, function (char) {
    let base = char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    return String.fromCharCode(base + ((char.charCodeAt(0) - base + 13) % 26));
  });
}

// ROT13 Decryption function (since ROT13 is a self-inverse transformation)
function rot13Decrypt(text) {
  return rot13Encrypt(text);
}

export { rot13Encrypt, rot13Decrypt };


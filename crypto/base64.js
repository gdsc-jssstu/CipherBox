const SIZE = 1800;

function base64encoder(input_string) {
  const base64 =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  let len = input_string.length;
  let padding = 0;
  let value = 0;
  let index = 0;
  let bits_count = 0;

  let encoded_string = "";

  for (let i = 0; i < len; i += 3) {
    value = 0;
    bits_count = 0;

    for (let j = i; j <= i + 2 && j < len; j++) {
      value = value << 8;
      value = value | input_string.charCodeAt(j);
      bits_count += 8;
    }

    if (bits_count === 8) {
      value = value << 4;
      bits_count += 4;
      padding = 2;
    } else if (bits_count === 16) {
      value = value << 2;
      bits_count += 2;
      padding = 1;
    }

    for (let j = 6; j <= bits_count; j += 6) {
      let temp = value >> (bits_count - j);
      let six_bits = temp % 64;
      encoded_string += base64.charAt(six_bits);
    }
  }

  for (let j = 0; j < padding; j++) {
    encoded_string += "=";
  }

  return encoded_string;
}

function base64decoder(encoded_string) {
  let len = encoded_string.length;
  let padding = 0;
  let value = 0;
  let index = 0;
  let bits_count = 0;

  let decoded_string = "";

  for (let i = 0; i < len; i += 4) {
    value = 0;
    bits_count = 24;
    padding = 0;

    for (let j = i; j <= i + 3 && j < len; j++) {
      let base64_character_index;

      if (encoded_string[j] >= "A" && encoded_string[j] <= "Z") {
        base64_character_index =
          encoded_string[j].charCodeAt(0) - "A".charCodeAt(0);
      } else if (encoded_string[j] >= "a" && encoded_string[j] <= "z") {
        base64_character_index =
          encoded_string[j].charCodeAt(0) - "a".charCodeAt(0) + 26;
      } else if (encoded_string[j] >= "0" && encoded_string[j] <= "9") {
        base64_character_index =
          encoded_string[j].charCodeAt(0) - "0".charCodeAt(0) + 52;
      } else if (encoded_string[j] === "+") {
        base64_character_index = 62;
      } else if (encoded_string[j] === "/") {
        base64_character_index = 63;
      } else if (encoded_string[j] === "=") {
        padding++;
        continue;
      }

      value = value << 6;
      value = value | base64_character_index;
    }

    if (padding === 2) {
      value = value >> 4;
      bits_count = 8;
    } else if (padding === 1) {
      value = value >> 2;
      bits_count = 16;
    }

    for (let j = 8; j <= bits_count; j += 8) {
      let temp = value >> (bits_count - j);
      let eight_bits = temp % 256;
      decoded_string += String.fromCharCode(eight_bits);
    }
  }

  return decoded_string;
}

export { base64encoder, base64decoder };

// Function to convert text to binary
function textToBinary(text) {
  return text.split('').map(function (char) {
    const binary = char.charCodeAt(0).toString(2);
    return '0'.repeat(8 - binary.length) + binary;
  }).join(' ');
}

// Function to convert binary to text
function binaryToText(binary) {
  const binaryArray = binary.split(' ');
  const text = binaryArray.map(function (binaryChar) {
    return String.fromCharCode(parseInt(binaryChar, 2));
  }).join('');
  return text;
}

// Export the functions so they can be used in other files
module.exports = {
  textToBinary,
  binaryToText
};

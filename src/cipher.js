window.cipher  = {
  encode: (string, offset) => {
    let textEncode ='';
    for (let i=0; i < string.length; i++) {
      textEncode += String.fromCharCode((string.charCodeAt(i)-65+ parseInt(offset))%26+65);
    }
    return textEncode;
  },

  decode: (string, offset) => {
    let textDecode ='';
    for (let i=0; i < string.length; i++) {
      textDecode += String.fromCharCode((string.charCodeAt(i)- 90 - parseInt(offset))%26+90);
    }
    return textDecode;
  }
}
  




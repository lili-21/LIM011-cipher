window.cipher  = {
  encode: (string, offset) => {
    let textEncode ='';
    for (let i=0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
        textEncode += String.fromCharCode((string.charCodeAt(i)-65+ parseInt(offset))%26 + 65);
      } if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
        textEncode += String.fromCharCode((string.charCodeAt(i)-48+ parseInt(offset))%10 + 48);
      }
    }
    return textEncode;
  },

  decode: (string, offset) => {
    let textDecode ='';
    for (let i=0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
        textDecode += String.fromCharCode((string.charCodeAt(i)- 90 - parseInt(offset))%26+90);
      } if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57) {
        textDecode += String.fromCharCode((string.charCodeAt(i)-57 - parseInt(offset))%10 + 57);
      }
    }
    return textDecode;
  }
}
  




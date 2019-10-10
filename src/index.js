let offset = 0;

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    document.getElementById('nivelSeguridad').classList.remove('ocultar')
    document.getElementById('inicio').classList.add('ocultar')
 });
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
    document.getElementById('nivelSeguridad').classList.remove('ocultar')
    document.getElementById('inicio').classList.add('ocultar')
 });
const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {
    document.getElementById('nivelSeguridad').classList.remove('ocultar')
    document.getElementById('inicio').classList.add('ocultar')
 });
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => {
    document.getElementById('nivelSeguridad').classList.remove('ocultar')
    document.getElementById('inicio').classList.add('ocultar')
 });

 const siguiente = document.getElementById('siguiente');
 siguiente.addEventListener('click', () => {	
	const select = document.getElementById('Nivel');
	offset =  parseInt(select.options[select.selectedIndex].value);
	document.getElementById('opciones').classList.remove('ocultar')
    document.getElementById('nivelSeguridad').classList.add('ocultar')
});
const btncifrado = document.getElementById('btncifrado');
    btncifrado.addEventListener('click', () => {
	document.getElementById('Cifrado').classList.remove('ocultar')
	document.getElementById('opciones').classList.add('ocultar')
});
const btndescifrado = document.getElementById('btndescifrado');
 btndescifrado.addEventListener('click', () => {	
	document.getElementById('descifrado').classList.remove('ocultar')
	document.getElementById('opciones').classList.add('ocultar')
});
const limpiarCifrado = document.getElementById('limpiarCifrado');
    limpiarCifrado.addEventListener('click', () => {
	document.getElementById('claveACifrar').value ='';
	document.getElementById('cifrado').value ='';
});
const limpiarDescifrado = document.getElementById('limpiarDescifrado');
limpiarDescifrado.addEventListener('click', () => {
	document.getElementById('claveADescifrar').value ='';
	document.getElementById('descifrado1').value ='';
});

const btnencode = document.getElementById('btnencode');
btnencode.addEventListener('click', () => {
	const texto = document.getElementById('claveACifrar').value;
	document.getElementById("cifrado1").value = cipher.encode(texto, offset); 
});
const btndecode = document.getElementById('btndecode');
btndecode.addEventListener('click', () => {
	const texto = document.getElementById('claveADescifrar').value;
	document.getElementById("descifrado1").value = cipher.decode(texto, offset); 
});

const soloMayuscula = (event) => {
	if (event.charCode < 65 || event.charCode > 90) {
		return event.preventDefault();
	}
}
const inputCifrar = document.getElementById('claveACifrar')
inputCifrar.addEventListener('keypress', soloMayuscula, false)

const inputDescifrar = document.getElementById('claveADescifrar')
inputDescifrar.addEventListener('keypress',  soloMayuscula, false)

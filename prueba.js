function hola(){
  alert("hola");
}

function elementIDNoExiste(){
	
	if(document.getElementById("NOEXISTE")==null){
		alert("No existe el elemento indicado con ese ID");
	}
}

function cambioAspectoBoton(){
	if(document.getElementById("ACC.PRUEBA2").style.color=="red"){
		document.getElementById("ACC.PRUEBA2").style.color="black";
		document.getElementById("ACC.PRUEBA2").style.cursor="default";
	}else{
		document.getElementById("ACC.PRUEBA2").style.color="red";
		document.getElementById("ACC.PRUEBA2").style.cursor="not-allowed";
	}
}

function mostrarPortapapeles(){
	
	(async () => {
	  const text = await navigator.clipboard.readText();
	  alert(text);
	})();
	
}

function mostrarPortapapeles2(){
	
  navigator.clipboard.readText().then(
	text => {
		alert(text);
	});

}

function pegarDesdePortapapeles(){
	
	(async () => {
	  const text = await navigator.clipboard.readText();
	  document.getElementById("inputPegar1").value=text.substring(0,1);
	  document.getElementById("inputPegar2").value=text.substring(4,7);     
	  document.getElementById("inputPegar3").value=text.substring(8);     // si se omite el segundo param, coge el resto hasta el final
	})();
}

async function pegarDesdePortapapeles2(){
	
	  const text = await navigator.clipboard.readText();
	  document.getElementById("inputPegar1").value=text.substring(0,1);
	  document.getElementById("inputPegar2").value=text.substring(4,7);     
	  document.getElementById("inputPegar3").value=text.substring(8);     // si se omite el segundo param, coge el resto hasta el final

}

function pegarDesdePortapapeles3(){
	
  navigator.clipboard.readText().then(
	text => {
		document.getElementById("inputPegar1").value=text.substring(0,1);
		document.getElementById("inputPegar2").value=text.substring(4,7);     
		document.getElementById("inputPegar3").value=text.substring(8);     // si se omite el segundo param, coge el resto hasta el final
	});
}

function copiarNumeros(e){
	const texto = document.getElementById("inputCopiarContent").value;
	const numeros = texto.replaceAll(/[^0-9]/g,'');     // ER para que filtre todo lo que no sea números
	//const numeros = texto.replace('/[^0-9]/g','');   // hace lo mismo que la anterior
	
	if(e.type=='mouseout' && numeros==''){
		// no hacemos nada
	}else{
		document.getElementById("inputPegar1").value=numeros.substring(0,3);
		document.getElementById("inputPegar2").value=numeros.substring(3,6);
		document.getElementById("inputPegar3").value=numeros.substring(6);    
	}
}

function limpiarContenidoInput(id){
	document.getElementById(id).value='';
}

function pasarInputDerecha(){
	
	const text = document.getElementById("inputPegar1").value;

	if(document.activeElement.selectionStart==3){	
		document.getElementById("inputPegar2").focus();  // Establece el foco en el elemento indicado
	}
}

function posicionInput1(){
	// ejemplo, poner <onclick="posicionInput1()"> en el input que queremos ver
	alert(document.activeElement.selectionStart + "-" + document.activeElement.selectionEnd + "id:" + document.activeElement.id); 
}

function tipoEvento(e){
	alert('Evento: ' + e.type);
}
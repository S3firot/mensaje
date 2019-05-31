function iniciar(){
	botonAceptar.disabled=true;
	cajaCheck.addEventListener("change",activarBoton);
	botonAceptar.addEventListener("click",enviarDatos);
}

function cargar(){
	location.href="pagina2.html";
}

function enviarDatos(){
	botonAceptar.value = "Enviando ...";
	botonAceptar.disabled=true;
	setTimeout(cargar,2000);
}

function activarBoton(){
		if(cajaCheck.checked==true){
			botonAceptar.disabled=false;
		}else{
			botonAceptar.disabled=true;
		}
}

window.addEventListener("load",iniciar);
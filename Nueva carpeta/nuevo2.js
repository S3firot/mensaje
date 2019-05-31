function iniciar(){
	botonEscribir.addEventListener("click",escribirTexto);
	botonResetear.addEventListener("click",resetear);
	cajaTexto.focus();
}

function resetear(){
	parrafo.textContent="";
	cajaTexto.value="";
	cajaTexto.focus();
}

function escribirTexto(){
	parrafo.textContent=cajaTexto.value;
}

window.addEventListener("load",iniciar);
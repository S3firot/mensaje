function iniciar(){
	bloque.style.display="none";
	añadirAsunto.addEventListener("click",verAsunto);
	botonQuitar.addEventListener("click",quitarAsunto);
}

function verAsunto(){
	bloque.style.display="block";
}

function quitarAsunto(){
	bloque.style.display="none";
}

window.addEventListener("load",iniciar);
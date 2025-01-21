
function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
function intentoDeUsuario(){
  alert('Click en el boton intentar desde la funcion');
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Escribe un número entre 1 y 100');


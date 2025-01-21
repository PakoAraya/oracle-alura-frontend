
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function intentoDeUsuario(){
  alert('Click en el boton intentar desde la funcion');
  return;
}

function generarNumeroSecreto(){
  return Math.floor(Math.random() * 100) + 1;

}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Escribe un número entre 1 y 100');


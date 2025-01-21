
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  console.log(typeof(numeroDeUsuario));
  console.log(numeroSecreto);
  console.log(typeof(numeroSecreto));
  console.log(numeroDeUsuario);
  console.log(numeroDeUsuario === numeroSecreto);
  return;
}

function generarNumeroSecreto(){
  return Math.floor(Math.random() * 100) + 1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Escribe un número entre 1 y 100');



let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  console.log(numeroSecreto);
  if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
    document.getElementById('reiniciar').disabled = false;
  }else if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento('p', 'El número secreto es menor');
  }else{
    asignarTextoElemento('p', 'El número secreto es mayor');
  }
  intentos++;
  limpiarCaja();

  return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', 'Escribe un número entre 1 y 100');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //Limpiar caja de texto
  limpiarCaja();
  //Indicar mensajes de intervalo de numeros
  //Generar nuevo número aleatorio
  // Reiniciar numero de intentos
  condicionesIniciales();
  //Deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();




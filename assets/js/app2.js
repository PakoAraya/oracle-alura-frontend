let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

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
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros
  if(listaNumerosSorteados.length === numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
  }else{
    // Si el número generado está incluido en la lista, hacemos una operación, sino, otra
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Escribe un número entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById('reiniciar').disabled = true;
}

function reiniciarJuego(){
  limpiarCaja();
  condicionesIniciales();
}

document.addEventListener('DOMContentLoaded', condicionesIniciales);


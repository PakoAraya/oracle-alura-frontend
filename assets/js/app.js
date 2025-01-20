
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos =1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;
while(numeroUsuario != numeroSecreto){
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
  console.log(numeroUsuario);

  /*
   * Este es un bloque de codigo que refleja comentarios
   * en el código fuente...
   */

  if (numeroUsuario == numeroSecreto){
    alert(`¡Felicidades! El numero correcto es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);
  }else{
    if(numeroUsuario > numeroSecreto){
      alert(`El numero secreto es menor`);
    }else{
      alert(`El numero secreto es mayor`);
    }
    intentos++;
    palabraVeces = 'veces';
    if(intentos > 3){
      alert(`Llegaste al numero maximo de ${maximoIntentos} intentos.`);
      break;
    }
  }
}

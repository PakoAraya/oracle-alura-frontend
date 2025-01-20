
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos =1;
let palabraVeces = 'vez';
while(numeroUsuario != numeroSecreto){
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
  console.log(numeroUsuario);

  /*
   * Este es un bloque de codigo que refleja comentarios
   * en el código fuente...
   */

  if (numeroSecreto == numeroUsuario){
    alert(`¡Felicidades! El numero correcto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}.`);
  }else{
    if(numeroSecreto > numeroUsuario){
      alert(`El numero secreto es menor: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}.`);
    }else{
      alert(`El numero secreto es mayor: ${numeroSecreto}. Lo hiciste en ${intentos} ${palabraVeces}.`);
    }
    intentos++;
    palabraVeces = 'veces';
    if(intentos > 3){
      alert('Llegaste al numero maximo de intentos');
      break;
    }
  }
}

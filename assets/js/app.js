
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos =1;
//let palabraVeces = 'vez';
let maximoIntentos = 3;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
  numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
  console.log(typeof(numeroUsuario));

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

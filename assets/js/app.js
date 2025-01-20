
let numeroSecreto = 7;
let numeroUsuario = 0;
while(numeroUsuario != numeroSecreto){
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
  console.log(numeroUsuario);

  /*
   * Este es un bloque de codigo que refleja comentarios
   * en el código fuente...
   */

  if (numeroSecreto == numeroUsuario){
    alert(`¡Felicidades! El numero correcto es: ${numeroSecreto}`);
  }else{
    if(numeroSecreto > numeroUsuario){
      alert(`El numero secreto es menor: ${numeroSecreto}`);
    }else{
      alert(`El numero secreto es mayor: ${numeroSecreto}`);
    }
  }
}

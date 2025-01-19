
let numeroSecreto = 7;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

/*
 * Este es un bloque de codigo que refleja comentarios
 * en el código fuente...
 */

if (numeroSecreto == numeroUsuario){
    alert(`¡Felicidades! El numero correcto es: ${numeroSecreto}`);
}else{
    alert(`¡No has conseguido el número secreto!, el numero correcto era: ${numeroSecreto}`);
}

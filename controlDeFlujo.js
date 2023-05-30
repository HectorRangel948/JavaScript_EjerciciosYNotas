/*

Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)
switch(expresión o condición){
    case valor1: 
        //Código que se ejecuta si la condición es igual a valor1
    break;

    case valor2: 
        //Código que se ejecuta si la condición es igual a valor2
    break;

    case valor3: 
        //Código que se ejecuta si la condición es igual a valor3
    break;

    case valor4: 
        //Código que se ejecuta si la condición es igual a valor4
    break;

    case valor5: 
        //Código que se ejecuta si la condición es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto


}*/

//Ejemplo de Switch

let pisoDestino = prompt("Ingresa al piso al que quieras ir (1 al 5)");

switch(pisoDestino){

    case "1":
        console.log("Vamos a piso 1 (suena música de elevador)");
        break;

    case "2":
        console.log("Vamos a piso 2 (suena música de elevador)");
        break;

    case "3":
        console.log("Vamos a piso 3 (suena música de elevador)");
        break;

    case "4":
        console.log("Vamos a piso 4 (suena música de elevador)");
        break;

    case "5":
        console.log("Vamos a piso 5 (suena música de elevador)");
        break;

}


//Ejercicio de Eevee

var elementoDeEvolucion = prompt("Ingresa el elemento con el que evolucionarás a tu pokemon");

switch(elementoDeEvolucion) 
{
    //case "piedraFuego" || "Piedra Fuego":
    case "piedraFuego":
        console.log("Tu Eevee ha evolucionado a Flareon");
        break;

    case "piedraTrueno":
        console.log("Tu Eevee ha evolucionado a Jolteaon");
        break;

        default:
            console.log("Valor incorrecto");

}
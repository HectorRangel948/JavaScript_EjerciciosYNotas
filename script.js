/* Test de nuestro programa (valores que también se evaluan como falsos)

-"false" (string)
-NaN
-false (boolean dispara verdadero)

*/

/*
Else if (si no)

Esta condicional nos ayida a ejecutar una nueva condición, en este caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

Estructura basica del esle if

if(condición 1){
    //bloque de codigo que se ejecuta si la condición 1 es verdadera
}
else if (condición 2) {
    //bloque de codigo que se ejecuta si la condición 1 es falsa y la condición 2 es verdadera.
}
else if (condición 3){
    //bloque de codigo que se ejecuta si la condición 1 y 2 son falsas.
}

Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.
*/

/*
edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 20;
coverDelAntro = 150;

if(edadDeDavid > edadPermitidaDelAntro){
    console.log("Miy bien puedes ir al antro");
}

else if (dineroDeDavid>=coverDelAntro){
    console.log("Si puedes entrar al antro");
}*/

let hora = prompt("Ingrese la hora actual");
if (hora < 12){
    console.log("Buenos días");
}
else if (hora<=19){
    console.log("Buenas tardes ya, que barbaro como pasa el tiempo");
}

else {
    console.log("Buenas noches, vamos a mimir");
}
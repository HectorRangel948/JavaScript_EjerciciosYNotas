
/* 
Bucles e iteración

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas. 

-while (mientras)
-do while (hacer mientras)
-for (para)


while(mientras)

//Estructura básica de una while

while(tenerSuenio && tenerUnaCamita)
{
    //Bloque de código
}

Ejemplo de un ciclo o bucle infinito

while(true){
    //bloque de codigo a ejecutar
}

*/

//Codigo de mi sopita de verduritas con pollo vegano

//Declaro e inicializo un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollo vegano"]; //6 elementos

var contador = 0;

while(contador < ingredientes.length){
    console.log("Agregando "+ ingredientes[contador] + " a la olla");
    contador++;
}

console.log("La sopa ya está lista");

/*
Casos de uso del ciclo while

- Para verificar si un usuario está registrado o no
-Verificamos la disponibilidad de un producto (stock)
-Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar información, etc)
-Recorrer publiaciones de un usuario
-Contador de likes

*/


/*
Do while

Es similar al while, con la diferencia de que las condición se evalúa 


*/

console.log("Ejemplo de galletitas con do-while");

//variabeltiempo de cocción que servirá como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do{
    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion+=5;
}

//Todo el bloque de codigo se va a evaluar mientras el tiempo de cocción sea menor a 30min. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20 o 25min, teniendo en máximo de 30min. Si pasamos de ese tiempo, puede que las galletas se quemen. 

//Esto es como si revisaramos el horno cada 5 min.

while(tiempoTranscurridoDeCoccion<30);
console.log("Después de "+ tiempoTranscurridoDeCoccion + "min, las galletas ya están listas");


/*

For (para)

Se utiliza cuendo se conoce el número exacto de iteaciones que se realizarán. Consiste en tres partes: inicialización, condición y expresión final. 

El bloque de código se ejecuta mientras la condición sea verdadera, y después de cada iteración se ejecuta la expresión final.

for (inicialización; condición; expresión de iteración){
    Bloque de código a ejecutar
}

-Inicialización: se ejecuta antes de que el bucle comience, y se utiliza para estableceruna variable de control (contador).

-Condición: se verifica antes de cada iteración, y si se evalua como verdadera, el bucle se ejecuta. 

-Expresión de iteración: se ejecuta al final de cada iteracion, y se utiliza para actualizar o modificar la variable de control

*/

//impirmirAsteriscos();
console.log("Ejemplo de la pizza con For");

var pasoDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

var tiempoPorPaso = [15, 10, 20];

//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos termino el proceso.


for(paso=0; paso<pasoDeReceta.length; paso++)
{
    console.log("Realizando paso para " + pasoDeReceta[paso] + ". Tiempo estimado " + tiempoPorPaso[paso] +" minutos");

}



//Ejemplo contador con FOR
for(let i = 10; i>0; i--)
{
    console.log("Faltan " + i + " segundos para el despuegue");
}

//Ejemplo de for para cupones de descuento
for(cupones=10; cupones>0; cupones--)
{
    console.log("Tienes un cupon de descuento");
    console.log("Nos quedan " + cupones + " disponibles");
}


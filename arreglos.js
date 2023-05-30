/*

Arreglos (arrays, matrices, colecciones de datos)
En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.

*/

// Cada asignatura está asociada a una variable individual


// Formas de declarar un array o arreglo

//1.- Usando los corchetes []
var miArray = [1,2,3,4,5,6];

// Variable sin inicializar
var colores;

//Arreglo sin asignar a una variable

["azul", "rojo", "Naranja", "Verde", ["Verde pastel", "Amarillo pastel", "Rosa pastel"]];

// Podemos tener distintos tipos de datos en un mismo arreglo
var datosFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];



var asignatura1 = "Matemáticas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";

// Array
var asignaturas = ["Matemáticas", "Literatura", "Física"];

console.log(asignaturas);

//Acceso a elementos de un arreglo
console.log("El elemento en la posición 2 de mis asignaturas es: ", asignaturas[2]);

//Si accedemos a un elemento que no existe, nos mostrará un undefined porque el espacio existe pero no tiene ningun valor
console.log("El elemento en la posición 10 de mis asignaruas es: " + asignaturas[10]);


//Mostrar la longitud de mi arreglo 
console.log(asignaturas.length);

//Ejemplo de arrays

//Array carrito de compras
var carrito = ["pantalón", "camisa", "corbata"];
var publicacion = ["Felipe", 137, "29-Mayo-2023"];

console.log(publicacion);
//Modificar los elementos dentro del array

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1]=138;

console.log(publicacion);

//No teníamos un elemento en la posición (index) 4 (indefinido = 150)
publicacion[4]=152;

//Método para agregar elementos al final de un arreglo
asignaturas.push("Biología");
console.log(asignaturas);

asignaturas.push("Inglés");
console.log(asignaturas);

asignaturas.push("Educación Física", "Química");
console.log(asignaturas);

//Método para eliminar el último elemento de un arreglo, no recibe argumentos, siempre elimina el úlitmo elemento de la lista
asignaturas.pop();
console.log(asignaturas);

//Método para agregar elementos al principio de un arreglo
asignaturas.unshift("Química", "Artes");
console.log(asignaturas);

//Método para eliminar elementos al inicio del arreglo
asignaturas.shift();
console.log(asignaturas);


//Método para saber si mi arreglo incluye un elemento específico

let carritoDeWalmart = ["Gansito", "Coquita", "Galletas María", "Mazapan"];

regalo = carritoDeWalmart.includes("Coquita");

if (regalo == true)
{
    console.log("Te regalo un sartén");
}




var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Mariana"];


//Método para concatenar arreglos

var listaDeGolosinas = ["Gansito", "Coquita", "Galletas María", "Mazapan"];

var listaDeFrutitasYVerduras = ["manzanas", "mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuincena = listaDeGolosinas.concat(listaDeFrutitasYVerduras);
console.log(listaDeComprasDeLaQuincena);

console.log(listaDeGolosinas + listaDeFrutitasYVerduras);


//Método para buscar un elemento en un arreglo y devolver el índice de su primera aparición. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("platanos"));


//Método para unir elementos de un arreglo con un valor definido en los parámetros
console.log(listaDeComprasDeLaQuincena.join('\nProducto: '));

/*
Investigar:
Reverse, Sort, toString, splice
*/
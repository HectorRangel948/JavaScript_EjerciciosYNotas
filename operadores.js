/*Operadores 

Los operadores nos permiten realizar una operacion en uno o varios operandos (variables o datos)

Tipos de operadores:
-Asignación
-Cadena
-Lógicos
-Comparación
-Aritnméticos


*/

//Asignación
let edadFelipe = 31;
var recipiente = "cafe";


/*Operadores de comparación

Nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representan la relación de sus valores. 
*/


let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

//Operador menor que
console.log("El valor 13 es menor que el valor 25 "+(numero1<numero2));

//Operador mayor que
console.log("El valor 13 es mayor que el valor 25 "+(numero1>numero2));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25 "+(numero2>=numero3));

//Operador de igualdad solo evalua valores
console.log("El valor 25 es igual que el valor25? " + (numero2==numero3));

//Operador de igualdad estricta (evalua el valor y el tipo de dato)
console.log("El valor 25 es igual que el valor25? " + (numero2===numero3));

//Operador de desigualdad
console.log("El valor 13 no es igual que el valor25? " + (numero1!=numero2));

//Operador de desigualdad estricta
console.log("El valor 25 no es igual que el valor25? " + (numero2!==numero3));

/*
Diferencia entre el operador de igualdad y el operador de igualdad estricta
Uno evalua el valor
Uno evalua el valor y el tipo de dato 
*/

/*Operadores lógicos

&& AND
|| OR
! NOT

Los operadores lógicos nos devuelven un resultado a partir de que se cumpla (o no) una condición. El resultado será un valor boolean y sus operadores son lógicos o asimilables entre ellos (los podemos combinar, y, los podemos poner en un orden específico).


&& (AND)

Sirve para determinar si dos expresiones son verdaderas. 

    -Si ambas expresiones son verdaderas, el resultado es verdadero,
    -Si una de las dos expresiones es falsa, todo el resultado es falso.

OR (||)

Sirve para determinar si dos expresiones 
*/

//Ejemplo con AND
/*
var num1 = 12;
var num2 = 24;

afirmacion1 = (num1<num2); //verdadero
afirmacion2 = (num1!=num2); //verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmaciones son verdaderas

//Ejemplo con OR
afirmacion3 = (num1<num2); //verdadero
afirmacion4 = (num1!==num2); //verdadero

console.log(afirmacion3||afirmacion4);

//Ejemplo con NOT
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

var num1 = 12;
var num2 = 24;
var num3 = 25;
var num4 = 92;
var num5 = 91;

op = (num1 < num2 || num2< num3) && (!(num1 != num2 && num5!= num3));

console.log(op);

*/
//Ejercicio operadores logicos
//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

/*
Expresión 1 = false
num5 es mayor que num2? true
num4 es menor que num3? false 

Expresión 2 = false
num1 es igual a num2? false
num3 es diferente a num3? false

Expresión 2 se cambia por el NOT a true
OP evalúa si la expresión 1 o la expresión 2 es verdadera.
La expresión 2 es verdadera, por ende: Op= true

*/

/*

Operadores aritméticos (+, -, *, /, %, **, ++, --)

+ (suma): Suma dos o más valores numéricos
- (resta): Resta dos o más valores numéricos
* (multiplicación): Multiplica dos o más valores numéricos
/ (división): Divide dos o más valores numéricos
% (residuo): Retorna el residuo de una división
** (exponenciación): Retorna el resultado de una ptencia. Se escribe la base antes de los asteriscos, y el exponenete después de los asteriscos.
++ (incremento) : incrementa un valor de uno en uno
 -- (decremento) : decrementa un valor de uno en uno
*/


/*Ejercicio +
let valor1 = 55;
let valor2 = 17;
//Para evitar la concatenación se tiene que poner la operación dentro de paréntesis
console.log("Suma: " + valor1 + valor2);
//Si usamos el signo de + el valor de la operación se volverá un texto
console.log("Suma: " + (valor1 + valor2));
//Para evitar eso se sustituye el símbolo + por una coma , *Incluso se puede remover los paréntesis pero es una buena práctica mantenerlos para la operación aritmética
console.log("Suma: " , (valor1 + valor2));
*/

let valor1 = 55;
let valor2 = 17;
console.log("Suma: " , valor1 + valor2);
console.log("Resta: " , valor1 - valor2);
console.log("Multiplicación: " , valor1 * 17);
console.log("División: " , valor1 / valor2);
console.log("Residuo: " , valor1 % valor2);
console.log("Exponente: " , valor1 ** valor2);
console.log("Incremento: " , ++valor1);
console.log("Decremento: " , --valor2);


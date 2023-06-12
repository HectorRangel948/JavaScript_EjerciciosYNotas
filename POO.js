/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

var casaArreglo = [3,2,1,"Rojo"];


//Creación de un objeto casa

const casa= {
    numHabitaciones: 3,
    numPisos: 2,
    numBanios:1,
    color: "Rojo",
}

console.log(casa.color);

//Plantillas para repetir 50 veces la misma casa (estandarizar)

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa información se va a ir personalizando.

class casaPlantilla {

    //1.- Definir mis propiedades como variables, para posteriormente agregarles valores (este valor se lo vamos a dar cuando instanciemos el objeto)
    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";

    //2.- Definimos los métodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto
    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas(){
        console.log("Sopla el viento* xd");

    }

    guardarmeDelFresnito(){
        console.log("Que agusticidah");

    }

    //3.-Definir una funcion constructora. Esta función es una funcion especial que se decdica única y exclusivamente a tomar los datos que definimos como variables para usarlas como parámetros de contrucción y así poder instanciar nuestro objeto

    //Los parámetros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }

}

//En la clase definimos todo de forma "noraml" (se declaran las variables como normalmente las usamos = y ;), pero cuando el objeto se crea (instancía), se visualiza de otra forma con : y , entre cada valor.

/*
Instanciar objetos

Para instanciar objetos, usamos la siguiente sintaxis:
variable con nombre = palabraReservadaNew referenciaDeLaClase (parámetros de construcción);

let objeto = new ClaseObjeto(parámetros);

*/

let casa1 = new casaPlantilla(6,3,2,"Azul");
console.log(casa1);
casa1.encenderLuces();
casa1.abrirVentanas();
casa1.guardarmeDelFresnito();


class gatitos{
    edad =0;
    tamanio="";
    caracter="";
    numVidas=0;
    color="";
    raza="";
    vacunas=false;

    maullar(){
        console.log("miau");
    }

    comer(){
        console.log("om nom nom");
    }

    ronronear(){
        console.log("prrrrr");
    }
    

    constructor(nombre, tamanio, caracter, numVidas, color, raza, vacunas)
    {
        this.nombre=nombre;
        this.tamanio=tamanio;
        this.caracter=caracter;
        this.numVidas=numVidas;
        this.color=color;
        this.raza=raza;
        this.vacunas=vacunas;
    }

    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamaño);
        console.log("El número de vidas de mi gato es: ", this.numVidas);
        console.log("La raza de mi gato es: ", this.raza);
    }


}

let guayabaElGato = new gatitos("Guayaba","Pequeño","Juguetón",7,"Naranja","De la cashe", true);
let horchataElGato = new gatitos("Horchata","Grande","Tranquilo",4,"Blanco","De la cashe", true);
let laChonaElGato = new gatitos("Chona","Mediano","Tranquilo",4,"Cafe atigrado","De la cashe", true);
let negroElGato = new gatitos("Negro","Grande","Juguetón",1,"Negro","De la cashe", true);
let peluditoElGato = new gatitos("Peludito","Pequeño","Tranquilo",7,"Café","Panthera-Leo", true);


guayabaElGato.imprimirInfo();
guayabaElGato.maullar();
horchataElGato.imprimirInfo();
horchataElGato.maullar();


/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para desearealizar un objeto JSON, vamos a utilizar un método llamado JSON.parse (objeto que queremos desearealizar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);

console.log(objetoDeserializado.nombre);

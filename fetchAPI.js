//JavaScript sincrono
console.log("Inicio Sincrono");
function dosSync(){
    console.log("Se ejecuta la funcion dos");
}


function unoSync(){
    console.log("Se ejecuta la función uno");
    dosSync();
    console.log("Se ejecuta el código tres");
}

unoSync();
console.log("Fin de síncrono");


//JavaScript asincrono
//setTimeout sirve para emular una respuesta de un servidor

console.log("Inicio de Asíncrono");
function dosAsync(){
    setTimeout(function(){
        console.log("Dos");    
    }, 5000); //tiempo en milisegundos
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de asíncrono");

/*
-Funcion setTimeout
-Notificaciones de cierre de sesion en apps bancarias
-Spotify con su cola de reproducción
-Conexiones a servidor
-Cargas de APIs

Ya que entendemos que la asincronia nos servirá para conectarnos a un servidor, y que sin importar la respuesta que este nos dé (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS.

-callbacks(llamados de vuelta): La forma más clasica de gestionar la asincronía
-Promisses (promesas): forma moderna
-Async/Await: forma moderna con una sintaxis más ligera

*/

/*

Qué es un callback (llamada de vuelta)

Un callback es una función que se pasa como argumento a otra función. Esta función se ejecutará después que la otra lo haga. Este mecanismo nos ayuda a controlar que cierto código no se ejectue antes de que el otro termine. 

Para que las necesitamos?
Sabemos que JS trabaja de forma descendente, entonces habrá casos que queamos hacer que un cógido se ejecute después de que ocurra otra cosa, y también de forma no secuencial. 

*/
/*
function hazClick(){
    console.log("Le hicisste click al botón");
}

const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick());


//Ejemplo de cancelIdleCallback
//Creamos una función llamada dobleNumero, que toma un número y un callback como argumentos (el callback es una función)

function dobleNumero(num,callback){
    const resultado=num*2; //Operación común y corriente
    callback(resultado); //Invocación de ese callback con el resultado como parámetro
}

//Definir una función para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero(5,mostrarResultado);

/*
Promises (promesas)

Son otro mecanismo para manejar la asincronía. Utilizar promesas hace que el código sea más legible y práctico que el usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola función (método) para manejar los callbacks.

promisee.then

promise.catch

Las promesas tienen estados:

 -Pendiente (pending): Es el estado inicial de nuestra promesa, aquí aún no tenemos resultados.

 -Fullfilled: Cuando la operación asíncrona se completa con extito (resolve)

 -Rejected (rechazo): Cuando la operación falla (reject)


 También las promesas, al ser un objeto, tienen métodos

 -then (function resolve): Ejectuta un callback llamado resolve cuando la promesa se cumple.

 -catch (function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.

 -then (resolve, reject): Puedo ejecutar las dos funciones en el mismo método then.

*/

//Creo una función llamada obtenerProductos para poder utilizar promesas y hacer la conexión a mi url para obtener datos

function obtenerProductos(){
    //cuando se ejecute la función, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve y otra cuando se rechaza
    return new Promise(function(resolve,reject){ //El objeto maneja dos funciones (resuelta, rechazo)
        fetch('https://fakestoreapi.com/products') //Dirección a donde me voy a conectar y buscar
        .then(function(response){ //Espero respuestas...
            if(response.ok){ //Propiedad booleana (si o no hay respuesta)
                return response.json(); //Método para convertir la respuesta a un objeto .json
            }
            else{
                throw new Error("Error al obtener los productos"); //Lanza un nuevo error (404)
            }
        })
        .then(function(data){//Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para después jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resuelvo con un rechazo.
            reject(error);
        });
    });
};

// Uso de la promesa
obtenerProductos()
.then(function(resultado){
    console.log(resultado);
})

.catch(function(error){
    console.log(error);
})


//Otro ejemplo de promesas para validar un nombre. Si el nombre que estoy evaluando conincide con un valor ya guardado previamente, entonces la promesa se resuelve correctamente. Si no, la promesa se rechaza y me muestra un mensaje de error

let nombre = "Felipe";

//Que el objeto promesa tiene dos posibles soluciones
let promesaNombre = new Promise(function(resolve,reject){
    if(nombre !=="Felipe"){ // Si el nombre es distinto de Felipe
        reject("Error, el nombre no es Felipe");
    } //Entonces rechaza la promesa
    else{ //Si no...
        resolve("Qué bien, el nombre es correcto"); //Resuelve la promesa e imprimir un dato
    }
});

console.log(promesaNombre);


/*
Necesito 
-URL
-Promesa (Con dos posibles caminos rechazo y solución)
    -si se resuelve me traigo los datos de la api
    -si no, muestro un error
*/

const obtenerPokemon = new Promise((resolve, reject)=>{
    fetch('https://pokeapi.co/api/v2/pokemon/charizard') //me conecto y busco
    .then(respuesta=>{ //cuando se conecta...
        if(respuesta.ok){ //si la conexion es ok
            return respuesta.json();//guardo el dato en .json
        }
        else{//si no me conecto...
            throw new Error("Error 404"); // muesto un error

        }
    })

    //segundo bloque (cuando ya me conecte al servidor)
    .then(datos=>{ //entonces esos datos...
        resolve(datos); //se usan como parámetro de mi resolución
    })

    //tercer bloque solo en caso de que no se encuentre información
    .catch(error=>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    }); //Solo se ponen los ; para que se puedan evaluar todos los bloques (.then() .then() .catch()) de principio a fin

});

//Ya que le di el mensaje a mi mesero (creaci+on de la promesa), ahora voy a poder mostrar la información si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon
.then(pokemon=>{
    console.log("Pokemon obtenido", pokemon.name);
})
.catch(error=>{
    console.log(error);
})

/*
Fetch API

Es una interfaz de JS, que nos da un método llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implícita esamos usando promesas, también de forma implícita sabemos que esa promesa se puede resolver o rechazar.

El método fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamada "response", que incluye la respuesta de la solicitud (aparte de decirnos que le conextión es ok, "pega" la información de lo que estamos consultando).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un montón de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/

//realizamos la petición al servidor
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
   
    .then(pokeRespuesta =>{ //cuando la promesa se resuelve, ejecutamos esta función
        return pokeRespuesta.json(); //esta función retorna la pokeinfo en un .json
    })

    
    .then(pokeInfo =>{ //cuando la promesa de la conexión se resuelve, entonces ejecutamos esta otra función. Esta función guarda la información de la respuesta, y lo guarda en una nueva variable llamada pokeInfo

        //Uso esa variable para hacer muchas cosas
        console.log("El nombre del pokemon es: " + pokeInfo.name + " su numero de la pokedex es: " + pokeInfo.id);
    })

    .catch(pokeError=>{
        console.log("No se encontró nada de información", pokeError);
    });

    /*
    //Manipulación del DOM + Fetch API

    const pokemonContainer = document.querySelector("#pokemonContainer");

    function traerPokemon(nombrePokemon){
        fetch(`https://pokeapi.co/api/v2/pokemon/ditto/${nombrePokemon}`)
        .then(respuesta=>{
            respuesta.json() //Se resuelve la promesa

            //ese .json lo asigno a una variable llamada datos, que usaré para alimentar una función llamada crearPokemon
            .then((datos)=>{
                crearPokemon(datos);
            });
        })
    }

    function crearPokemon(nombrePokemon){
        const pokeImg = document.createElement("img"); //creo una etiqueta img
        pokeImg.src=nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad donde está la imagen de mi pokemon
        const h2 = document.createElement("h2");
        h2.innerHTML = nombrePokemon.name; //Le pongo el nombre del pokemon a ese h2
        const pokeDiv = document.createElement("div"); //creamos un div para poner mi pokemon
        //Inseto los elementos imagen y h2 a un div particular de cada pokemon
        pokeDiv.appendChild(pokeImg);
        pokeDiv.appendChild(h2);
        //Inserto ese div particular en un div general que están en el html
        pokemonContainer.appendChild(pokeDiv);
    }

traerPokemon("pikachu");*/


const pokemonContainer = document.querySelector("#pokemonContainer");
const button = document.querySelector("#botonPokemon");
const input = document.querySelector("#inputPokemon");

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);

//Manipulacion del DOM + Fetch API
function traerPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    //guardo la respuesta en .json
    .then(respuesta => respuesta.json()) //Se resuelve la promesa

    //ese .json lo asigno a una variable llamda datos, que usare para alimentar una funcion llamada crearPokemon
    .then((datos) =>{
        crearPokemon(datos);
    });
}

function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img"); //creo una etiqueta img
    pokeImg.src = nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad donde esta la imagen de mi pokemon
    const h2 = document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //le pongo el nombre del pokemon a ese h2
    const pokeDiv = document.createElement("div"); //crearmos un div para poner mi pokemon
    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);
    //inserto ese div particular en un div general que estan en el html
    pokemonContainer.appendChild(pokeDiv);

}
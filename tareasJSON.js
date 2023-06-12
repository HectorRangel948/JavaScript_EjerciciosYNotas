// 1.- Creamos un arreglo de objetos para nuestras tareas, estas tareas tendrán atributos como id, título, estatus completada o no completada.

//Esto donde se ejecuta? Del lado del cliente
let tareas = [
    {
        id: 1,
        titulo: "Bañar al perro",
        estatus: true
    },
    {
        id: 2,
        titulo: "Preparar la comida",
        estatus: false
    }
]

//Enviar ese arreglo al servidor
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);

//Ejemplo del carrito de compras

//Declaramos un arreglo de objeto vacío
let carritoDeCompras = [];

//Producto de mi catalogo
let producto = { //Los productos estarán almacenados individualmente en la base de datos
        id:1,
        nombre: "Camisa de Pokemon",
        precio: 299.99,
        cantidad:1
};

//Mostrar información del carrito de compras
console.log("Tienes ",carritoDeCompras.length, " producto(s) en tu carrito");

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);
//Muestro la nueva información de mi carrito
console.log("Tienes ",carritoDeCompras.length, " producto(s) en tu carrito");

//Actualizar la cantidad de productos en el carrito
let productoId =1; //Producto a actualizar
let nuevaCantidad = 3; //Cantidad nueva de productos que voy a comprar

//Verifico si mi producto existe dentro del carrito de compras para poder modificarlo, si existe, actualizo la cantidad, si no, no hago nada. Todo esto se evalúa con base en el id que estoy buscando  y este debe coincidir con el id del producto que debería tener dentro de mi carrito de compras. 
let productoExiste = carritoDeCompras.find(producto=> producto.id === productoId);

if(productoExiste){
    productoExiste.cantidad = nuevaCantidad;
}

producto.cantidad = nuevaCantidad;
console.log("Tienes ",carritoDeCompras.length, " producto(s) en tu carrito");

console.log(producto);

/*
//Con función flecha
carritoDeCompras.find(producto => producto.id === productoId);


//Sin función flecha

carritoDeCompras.find(function(producto){
    return producto.id===productoId; //true or false
})
*/

//Eliminar un producto del carrito
let productoAEliminar = 1; //valor que quiero borrar

//Reviso el id del producto a eliminar en cada uno de los indices de mi arreglo, si encuentro un indice que dentro tenga un objeto que coincida con el id que quiero borrar, entonces lo elimino.
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoAEliminar; //true or false
});

//Verificar si el indice del elemento que se encontró es válido. Con el findIndex voy a devolver el primer índice del elemento que cumpla con la condición. Si no se encuentra el elemento que coincida con la condición, entonces vamos a devolver un -1, esto para evitar borrar un elemento que no sea (pensando que tenemos un indice 0) 
if(indiceProductoAEliminar !==-1){ //0,1,2,3 disparan true y se activa el if. Que el -1 dispara false, y no se activa el if.
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}

console.log("Tienes ",carritoDeCompras.length, " producto(s) en tu carrito");

//Me quede en 2:17:51

//Vacíar carrito completo
//function vaciarCarritoCompleto(){
    //Para vaciar todo el carrito
  //  carritoDeCompras =[];
//}
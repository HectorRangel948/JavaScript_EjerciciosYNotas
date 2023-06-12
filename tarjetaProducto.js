//1-Obtener los elementos del HTML para guardarlos en variables 


//Referenciar el botón
const botonAgregarProductos = document.getElementById("agregarProducto");

 //Almaceno el lugar de destino de mi tarjetita en una constante
 const container = document.getElementById("product-container");


//Almacenar elementso del formulario 
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");


function agregarProductos(){

    //Guardo los valores de mis inputs
    let valorInputProducto = nombreProducto.value;
    let valorInputDescripcion = descripcionProducto.value;
    let valorInputImagen = imagenProducto.value;

    console.log(valorInputImagen);
    
   //Quiero que cada tarjetita tenga su propio div o contenedor
    const productCard = document.createElement("div");


    //Creo el elemento
    productCard.innerHTML = `
    <img src="${valorInputImagen} alt=producto" alt="Producto">
    <h3>${valorInputProducto}</h3>
    <p>Descripción: ${valorInputDescripcion}</p>
    <p>Precio: $9.99</p>
    <button class="btn">Agregar al carrito</button>
    <br><br><br>

    `;

    //Agregar esa tarjeta de producto al container especificado 
    container.appendChild(productCard);
}


botonAgregarProductos.addEventListener("click", agregarProductos);

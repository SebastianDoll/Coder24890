/* let nombreProductoA = 'Mesa';
let stockProductoA = 10;
let precioProductoA = 10000;
let descuentoProductoA = 0.8;
 */

/* let nombreProductoB = 'Silla';
let stockProductoB = 20;
let precioProductoB = 2000;
let descuentoProductoB = 0.9; */


/* const productoA = {
    nombre: "Mesa",
    stock: 10,
    precio: 10000,
    descuento: 0.8
} */


function Producto (nombreValor, stockValor, precioValor, descuentoValor, categoriaValor, idValor, imgValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.descuento = descuentoValor;
    this.categoria = categoriaValor;
    this.id = idValor;
    this.img = imgValor
    
    this.venta = function(cantidadComprada){
        this.stock -= cantidadComprada
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
}

/* class Producto{
    constructor(nombreValor, stockValor, precioValor, descuentoValor){
        this.nombre = nombreValor;
        this.stock = stockValor;
        this.precio = precioValor;
        this.descuento = descuentoValor;
    }
    venta(cantidadComprada){
        this.stock -= cantidadComprada
        console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
    }
} */

let contador = 0
let listadoProductosMenu = "Estos son nuestros productos: "

const productoA = new Producto("Mesa", 10, 10000, 0.8, "Madera", 1, "./img/buenos-aires.jpg")
const productoB = new Producto("Silla", 20, 2000, 0.9, "Plastico", 2, "")
const productoC = new Producto("Puerta", 5, 20000, 0.95, "Madera", 3, "")
const productoD = new Producto("Mueble", 10, 10000, 0.8, "Madera", 4, "")

const listaProductos = [productoA, productoB, productoC, productoD]

//let categoriaProducto = prompt("Ingrese la categoria de producto que quiere ver:")



let flagMadera = 0

let madera = document.querySelector('.categoria1')
let plastico = document.querySelector('.categoria2')

//AGREGADO POST CLASE --> modifique el nombre de la funcion "renderMadera" por "renderProductos" y le agrego el parametro
//"categoria" para no repetir la misma funcion solo por esa diferencia. Fijense que debajo esta la forma de pasar una 
//funcion/event handler con un parametro(porque recuerden que no debe ejecutarse la funcion en el event listener, sino solo 
// pasar una referencia)

madera.addEventListener('click', function(){renderProductos("Madera")})
plastico.addEventListener('click', function(){renderProductos("Plastico")})

function renderProductos(categoria){
    /* if(flagMadera === 0){
        const listaSegunCategoria = listaProductos.filter(x => x.categoria == 'Madera')

        let catalogo = document.querySelector('.catalogo')


        for (const producto of listaSegunCategoria) {
            let contenedor = document.createElement("div");
            
            contenedor.innerHTML = `<div class="card">
                                    <p> Producto: ${producto.nombre}</p>
                                    <b> $ ${producto.precio}</b>
                                    <img src=${producto.img} class="imagen"/>
                                    <button>Comprame!</button></div>`


            catalogo.appendChild(contenedor);
        }
        flagMadera++
    } */
    const listaSegunCategoria = listaProductos.filter(x => x.categoria == categoria)

    let catalogo = document.querySelector('.catalogo')

    catalogo.innerHTML = ''

    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `<div class="card">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <img src=${producto.img} class="imagen"/>
                                <button>Comprame!</button></div>`


        catalogo.appendChild(contenedor);
    }
}

/* function renderPlastico(){
    const listaSegunCategoria = listaProductos.filter(x => x.categoria == 'Plastico')

    let catalogo = document.querySelector('.catalogo')

    catalogo.innerHTML = ''


    for (const producto of listaSegunCategoria) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `<div class="card">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <img src=${producto.img} class="imagen"/>
                                <button>Comprame!</button></div>`


        catalogo.appendChild(contenedor);
    }
}

let catalogoNuevo = document.createElement('div') */



/* let boton1 = document.querySelector('.boton1')

boton1.addEventListener('click', saludar)

function saludar(){
    console.log('Bienvenido, gracias por clickear este boton')
}

let renderProductos = document.querySelector('.productos1')

renderProductos.addEventListener('click', mostrarProductos)

function mostrarProductos(){
    for (const producto of listaProductos) {
        let contenedor = document.createElement("div");
        
        contenedor.innerHTML = `<div class="card">
                                <p> Producto: ${producto.nombre}</p>
                                <b> $ ${producto.precio}</b>
                                <img src=${producto.img} class="imagen"/>
                                <button>Comprame!</button></div>`
    

        catalogo.appendChild(contenedor);
    }
} */

/* for(const producto of listaProductos){
    contador++
    listadoProductosMenu += "\n" + contador + "- " + producto.nombre
}

function listarProductos(){
    alert(listadoProductosMenu)
} */
 
/* function menu(){
    let opcion = prompt("Menu: \n1 - Ver productos\n2 - Saludar\nESC- Salir")

    switch(opcion){
        case "1":
            listarProductos();
            comprarProductos();
            break;
        case "2":
            saludar("Bienvenido a");
            menu();
            break;
        case "ESC":
            saludar("Gracias por visitar")
            break;
        default:
            alert("Opcion Incorrecta")
            menu()
            break;
    }
}

function saludar(saludo){
    alert(saludo + " nuestra pagina!")
}



let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock) {
    alert("No tenemos stock suficiente de ese producto, puede comprar hasta " + stock + " unidades")
}

/* function stockSuficiente(stock, nombre) {
    stock -= cantidadComprada;
    console.log("El stock remanente es de: " + stock + nombre);
} 

function calcularPrecio(producto){
    precioTotalVenta += cantidadComprada * producto.precio * producto.descuento;
}


function compra(producto) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= producto.stock) {
    //stockSuficiente(stock, nombre);
    //console.log(producto)
        producto.venta(cantidadComprada)
        if(cantidadComprada > 3){
            calcularPrecio(producto)
        }
        else{
            calcularPrecio(producto)
        }
    }
    else {
        stockInsuficiente(producto.stock)
    }
}

function comprarProductos(){

    let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos que quiere comprar"))

    for (let i = 0; i < cantidadProductosComprados; i++) {

        let nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar:")

        let productoBuscado = listaProductos.find(x => x.nombre == nombreCompra)

        if(productoBuscado){
            compra(productoBuscado)
        }
        else{
            alert('No tenemos ese producto')
        }

        /* if (nombreCompra == productoA.nombre) {
            compra(productoA)
        }
        else if (nombreCompra == productoB.nombre) {
            compra(productoB)
        }
        else {
            alert('No tenemos ese producto')
        } 
    }

    alert("El precio de su compra es de: $" + precioTotalVenta);
}



menu()


 */

/* stockProductoA = stockProductoA - cantidadComprada;

let precioTotalVenta = cantidadComprada * precioProductoA;

alert("El precio de su compra es de: $" + precioTotalVenta);
console.log("Quedan " + stockProductoA + "mesas"); */
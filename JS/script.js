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


function Producto (nombreValor, stockValor, precioValor, descuentoValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.descuento = descuentoValor;
    
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

const productoA = new Producto("Mesa", 10, 10000, 0.8)
const productoB = new Producto("Silla", 20, 2000, 0.9)
const productoC = new Producto("Puerta", 5, 20000, 0.95)
const productoD = new Producto("dsfsg", 10, 10000, 0.8)


const listaProductos = [productoA, productoB, productoC, productoD]

listaProductos.push( new Producto("asfadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("asffsdgsadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("sadsf", 20, 2000, 0.9))
listaProductos.push( new Producto("asfSdqwrfadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("asfAVsdvsdvadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("asfasdgzrgzvcdvs", 20, 2000, 0.9))
listaProductos.push( new Producto("axcbxbsfadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("asfxcnznadvs", 20, 2000, 0.9))
listaProductos.push( new Producto("asfazegwdvs", 20, 2000, 0.9))




for(const producto of listaProductos){
    contador++
    listadoProductosMenu += "\n" + contador + "- " + producto.nombre
}

function listarProductos(){
    alert(listadoProductosMenu)
}
 
function menu(){
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
} */

function calcularPrecio(precio, descuento){
    precioTotalVenta += cantidadComprada * precio * descuento;
}


function compra(stock, precio, descuento, producto) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= stock) {
    //stockSuficiente(stock, nombre);
    //console.log(producto)
        producto.venta(cantidadComprada)
        if(cantidadComprada > 3){
            calcularPrecio(precio, descuento)
        }
        else{
            calcularPrecio(precio, 1)
        }
    }
    else {
        stockInsuficiente(stock)
    }
}

function comprarProductos(){

    let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos distintos que quiere comprar"))

    for (let i = 0; i < cantidadProductosComprados; i++) {

        let nombreCompra = prompt("Ingrese el nombre del producto que quiere comprar:")

        if (nombreCompra == productoA.nombre) {
            compra(productoA.stock, productoA.precio, productoA.descuento, productoA)
        }
        else if (nombreCompra == productoB.nombre) {
            compra(productoB.stock, productoB.precio, productoB.descuento, productoB)
        }
        else {
            alert('No tenemos ese producto')
        }
    }

    alert("El precio de su compra es de: $" + precioTotalVenta);
}



menu()




/* stockProductoA = stockProductoA - cantidadComprada;

let precioTotalVenta = cantidadComprada * precioProductoA;

alert("El precio de su compra es de: $" + precioTotalVenta);
console.log("Quedan " + stockProductoA + "mesas"); */
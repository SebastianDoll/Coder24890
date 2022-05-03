let nombreProductoA = 'Mesa';
let stockProductoA = 10;
let precioProductoA = 10000;
let descuentoProductoA = 0.8;

let nombreProductoB = 'Silla';
let stockProductoB = 20;
let precioProductoB = 2000;
let descuentoProductoB = 0.9;


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

function listarProductos(){
    alert("Estos son nuestros productos: \n1- " + nombreProductoA + "\n2- " + nombreProductoB)
}

let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock) {
    alert("No tenemos stock suficiente de ese producto, puede comprar hasta " + stock + " unidades")
}

function stockSuficiente(stock, nombre) {
    stock -= cantidadComprada;
    console.log("El stock remanente es de: " + stock + nombre);
}

function calcularPrecio(precio, descuento){
    precioTotalVenta += cantidadComprada * precio * descuento;
}


function compra(stock, precio, nombre, descuento) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
    if(cantidadComprada <= stock) {
    stockSuficiente(stock, nombre);
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

        if (nombreCompra == nombreProductoA) {
            compra(stockProductoA, precioProductoA, nombreProductoA, descuentoProductoA)
        }
        else if (nombreCompra == nombreProductoB) {
            compra(stockProductoB, precioProductoB, nombreProductoB, descuentoProductoB)
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
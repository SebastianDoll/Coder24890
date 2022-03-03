/* const objetoA = {
    altura: 150,
    largo: 120,
    ancho: 80,

}*/

/* function mayorQue(n) {
 return (m) => m > n
}

let mayorQueDiez = mayorQue(10)
let mayorQueCien = mayorQue(100)

let mayorQueDiez = (m) => m > 10


console.log( mayorQueDiez(12) ) // true
console.log( mayorQueDiez(8) ) // fals



function suma(a, b){
    return a + b
}

let suma = (a, b) => a + b */
/* function porCadaUno(numeros, acumular){
    for(const element of numeros){
        acumular(element)
    }
} */

let numeros = [1, 2, 3, 4]
let total = 0

function acumular(num) {
 total += num
}

porCadaUno(numeros, acumular)

console.log(total) // 10


/*
console.log(objetoA)

let apellido = 'Aguero' */

//const nombres = ["Kun", "Lio", "Fideo", "Pipi", "Pupi", "Lio"]

//console.log(nombres.length)
/*                012345
let usuario = "Carlos"

console.log(usuario.length) */

/* let usuario = prompt("Ingrese su nombre")

nombres.unshift(usuario) */

/* nombres.pop()
nombres.shift() */

/* const nuevoArray = nombres.slice(1, 4)

console.log(nombres.indexOf("Lio"))
 */

/* for( let i = 0; i < nombres.length; i++){
    alert("Hola " + nombres[i])
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
                            }
                        
                            alert("Gracias por su compra")
                        }
                }
            
                alert("Gracias por su compra")
            }
            break;
        case "ESC":
            saludar("Gracias por visitar")
            break;
        default:
            alert("Opcion Incorrecta")
    }

    alert("Gracias por su compra")
} */




/* let numeroUsuario = parseInt(prompt('Ingrese el numero hasta el que desea contar'))

for(let i = 0; i < numeroUsuario; i++){
    if(i == 10){
        continue;
    }
    console.log('Este es el ciclo N:' + i)
    
} */

/* Variables Globales */
/* let nombreUsuario = prompt("Ingrese su nombre:")
let apellidoUsuario = prompt("Ingrese su apellido:")
let edadUsuario = parseInt(prompt("Ingrese su edad:"))

function saludar(nombre, apellido, edad) {
    alert("¡Hola " + nombre + " " + apellido + ". Tu edad es: " + edad);
} */

/* Ejecucion de funciones */

/* saludar(nombreUsuario, apellidoUsuario, 43) */
/* let numeroDeEntradas = parseInt(prompt("ingrese la cantidad de entradas que quiere comprar:")) */

/* function numeroAlAzar(){
    return 
} */

/* for(let i = 0; i < numeroDeEntradas; i++){
    let codigoDeEntrada = Math.trunc(Math.random() * 1000)
    console.log("Su codigo de Entrada es: " + codigoDeEntrada)
} */

/* function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

sumar(5, 8)

let resultado = valor;
console.log(resultado) */

/* let colorUsuario = prompt('Ingrese un color:')

switch(colorUsuario){
    case 'rojo':
        console.log("tu color es el Rojo");
        break;
    case 'azul':
        alert("Azul es un gran color")
        break;
    case 'amarillo':
        console.log('Que color interesante')
        break;
    default:
        console.log('No pensamos en el color:' + colorUsuario)
        break;
} */


/* let numero = 0;

numero = numero + 10;
numero += 10;

i += 1
i++

i-- */
function menu(){
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
}




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
let numeroDeEntradas = parseInt(prompt("ingrese la cantidad de entradas que quiere comprar:"))

/* function numeroAlAzar(){
    return 
} */

for(let i = 0; i < numeroDeEntradas; i++){
    let codigoDeEntrada = Math.trunc(Math.random() * 1000)
    console.log("Su codigo de Entrada es: " + codigoDeEntrada)
}

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
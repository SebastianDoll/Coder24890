/* let titulo = document.getElementById("titulo")

console.log(titulo.innerText)

let subtitulo = document.createElement("h3")

subtitulo.innerText = "Bienvenidos!"

document.body.prepend(subtitulo)

let paises = document.getElementsByClassName("paises");

let paisNuevo = document.createElement("li")

paisNuevo.innerText = "CO"

let listaPaises = document.getElementById("listapaises")

//listaPaises.prepend(paisNuevo)

listaPaises.insertBefore(paisNuevo, listaPaises.children[1]) */

/* const productos = [{ id: 1, nombre: "Arroz", precio: 125 },
 { id: 2, nombre: "Fideo", precio: 70 },
 { id: 3, nombre: "Pan" , precio: 50},
 { id: 4, nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p> Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>
                            <button>Comprame!</button>`;
    document.body.appendChild(contenedor);
} */


//CODIGO JS
let input1 = document.getElementById("nombre")

input1.addEventListener('change', () => {
 console.log(input1.value)
})

let miFormulario = document.getElementById ("formulario");
miFormulario. addEventListener ("submit", validarFormulario );
function validarFormulario (e){
 //Cancelamos el comportamiento del evento
 e.preventDefault ();
 //Obtenemos el elemento desde el cual se disparó el evento
 let formulario = e.target

 console.log(e.target)
 //Obtengo el valor del primero hijo <input type="text">
 console.log(formulario.children[ 0].value); 
 //Obtengo el valor del segundo hijo <input type="number"> 
 console.log(formulario.children[ 1].value); 
}



//console.log(titulo.innerText)

/* console.log(document.body.innerHTML)


let cards;

for(let i = 0; i < 5; i++){
    cards += '<h1>Buenas Noches</h1><p>' + Producto1.nombre +' </p><button>Comprame!</button>'
}

document.body.innerHTML = cards */

//CODIGO JS
/* let paises = document.getElementsByClassName("paises");

/* console.log(paises);
console.log(paises[0].innerText); 

for (const pais of paises) {
    console.log(pais.innerHTML);
   } */
window.addEventListener('hashchange', () => {
    //console.log(window.location.hash)
    router(window.location.hash)
})



let contenido = document.getElementById('app')

const router = (hash) => {
    contenido.innerHTML = ''
    switch(hash){
        case '#/':{
            contenido.appendChild(home())
            return console.log("home")
        }
        case '#/posts': {
            contenido.appendChild(posts())
            window.scrollTo(0,1500)
            return console.log("posts")
        }
        case '#/products': {
            contenido.appendChild(products())
            return console.log("productos")
        }
        case '#/nosotros': {
            contenido.appendChild(nosotros())
            return console.log("Nosotros")
        }
        default:
            contenido.appendChild(notFound())
            return console.log("404, Esa pagina no existe!")
    }
}
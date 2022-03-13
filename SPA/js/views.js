const home = () => {
    const vista = "<h1>Home</h1>"
    const divHome = document.createElement('div')
    
    divHome.innerHTML = vista;
    let button = document.querySelector('#home')
    button.classList.remove('button')
    button.classList.add('buttonblack')

    return divHome
}

const posts = () => {
    const vista = "<h2>Estos son tus posts:</h2><p>Post 1</p><h4>Post 2</h4><h5>Post 3</h5>"
    const divPost = document.createElement('div')
    divPost.classList.add('tamano')
    divPost.innerHTML = vista;
    let button = document.querySelector('#posts')
    button.classList.remove('button')
    button.classList.add('buttonblack')

    return divPost
}

const products = () => {
    const vista = "<h2>Estos son tus productos:</h2><p>Producto A</p>"
    const divProd = document.createElement('div')
    divProd.innerHTML = vista;
    let button = document.querySelector('#productos')
    button.classList.remove('button')
    button.classList.add('buttonblack')
    return divProd
}

const nosotros = () => {
    const vista = "<h2>Esta pagina esta en construccion!</h2>"
    const divUs = document.createElement('div')
    divUs.innerHTML = vista;
    let button = document.querySelector('#nosotros')
    button.classList.remove('button')
    button.classList.add('buttonblack')
    return divUs
}

const notFound = () => {
    const vista = "<h2>Esta pagina no existe</h2>"
    const divNot = document.createElement('div')
    divNot.innerHTML = vista;

    return divNot
}
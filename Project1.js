//Creamos las constantes que permiten acceder al menu en un dispositivo movil//

const navToggle =  document.querySelector(".nav-toggle");
const navMenu =  document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => { 
    navMenu.classList.toggle("nav-menu_visible");
if(navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar Menu"); 
} else {
    navToggle.setAttribute("aria-label", "abrir menu");
}

});


const contenedorProductos = document.getElementById('Contenedor-Productos')


let carrito = []
stockProductos.forEach((Productos) => {

    const div = document.createElement('div')
    div.classList.add ('producto')
    div.innerHTML = `
    <img src= ${producto.img} alt="">
    
    <h3> ${Producto.img}</h3>
    <p> ${Producto.desc}</p>
    <p> Talle: ${Producto.talle} </p>
    <p class="precioProducto">Precio: $ ${Product.precio} </p>
    <button id= "agregar${Producto.id}" class="button-agregar"> Agregar <i class="fa-solid fa-cart-shopping"></button>
    `
    
    contenedorProductos.appendChild(div)

    
const boton= document.getElementById('agregar${Producto.id}')

boton.addEventListener('click', () => {
    agregarAlcarrito(producto.id)
})

      })

const agregarAlcarrito = (prodId) => {
const item = stockProductos.find((Prod) => prod.id === prodId )
carrito.push(item)

}



let boton = document.getElementById('button');
let productos = document.getElementById('listaProductos');


boton.addEventListener('click', agregarElementoLista);

function agregarElementoLista() {
    let elementoLista = document.createElement('li');
    elementoLista.innerHTML = "Producto agregado";
    elementoLista.classList.add("list-group-item");
    productos.appendChild(elementoLista);
}
let boton = document.getElementById('button');
let productos = document.getElementById('listaProductos');
let elementoLista = document.createElement('li');
elementoLista.innerHTML = "Producto agregado";

boton.onclick = () => {elementoLista.classList.add("list-group-item"); productos.appendChild(elementoLista);}

// function agregarElementoLista() {
//     elementoLista.classList.add("list-group-item");
//     productos.appendChild(elementoLista);
// }
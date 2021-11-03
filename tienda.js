// let boton = document.getElementById('button');
// let productos = document.getElementById('listaProductos');


// boton.addEventListener('click', agregarElementoLista);

// function agregarElementoLista() {
//     let elementoLista = document.createElement('li');
//     elementoLista.innerHTML = "Producto agregado";
//     elementoLista.classList.add("list-group-item");
//     productos.appendChild(elementoLista);
// }

let botones = document.getElementsByClassName('btn');
let nombreProd = document.getElementsByTagName('h5');
let productos = document.getElementById('listaProductos');


for(let boton of botones){

    boton.addEventListener('click', () => {

        let elementoLista = document.createElement('li');
        console.log(boton.id);

        if(boton.id == 1){
            elementoLista.innerHTML = nombreProd[0].textContent;

        }else if(boton.id == 2){
            elementoLista.innerHTML = nombreProd[1].textContent;

        }else if(boton.id == 3){
            elementoLista.innerHTML = nombreProd[2].textContent;

        }else if(boton.id == 4){
            elementoLista.innerHTML = nombreProd[3].textContent;
        }

        elementoLista.classList.add("list-group-item");
        productos.appendChild(elementoLista);
        
    });
}
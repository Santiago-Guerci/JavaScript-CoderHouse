//Adapto el código a mi idea de proyecto final (el mismo de desarrollo web)
//Una tienda de panadería y pastelería

let producto = 0;
let cantidadProducto = 0;
let precio = 0;

class Pedido {
    constructor(producto, precio, cantidad){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }

    calcularIva() {
        return this.subTotal * 0.21;
    }

    calcularEnvio() {
        if(this.subTotal >= 4000) {
            this.envio = 0;
        } else {
            this.envio = 500;
        }
    }

    calcularTotal() {
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
}


function pedidoProducto() {
    while(!producto || producto == 0 || producto > 5) {
        producto = parseInt(prompt("¿Qué producto desea comprar?:\n 1: Box Desayunos($1300)\n 2: Box Surtidos($1800)\n 3: Box Vinos($2200)\n 4: Box Minitortas($2000)\n 5: Box Panadería($1500)"));
    }

    switch(producto){
        case 1:
            producto = "Box Desayunos";
            precio = 1300;
            break;
        case 2:
            producto = "Box Surtidos";
            precio = 1800;
            break;
        case 3:
            producto = "Box Vinos";
            precio = 2200;
            break;
        case 4:
            producto = "Box Minitortas";
            precio = 2000;
            break;
        case 5:
            producto = "Box Panadería";
            precio = 1500;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Producto elegido: "+ producto + "\n ¿Cuántos desea comprar? Introduzca un número."));
    }

    return new Pedido(producto, precio, cantidadProducto)
}

alert("AxelCocina - Panadería y Pastelería");

const pedido = pedidoProducto();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle del pedido:\n"+
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 21%: $" + pedido.calcularIva() + "\n" +
    "- Costo de envío: $" + pedido.envio + "\n" +
    "Total = $" + pedido.total
);

alert("Próximamente se abrirá la posibilidad de armar su propia caja personalizada, así como poder incluir varios productos distintos en el carrito.");
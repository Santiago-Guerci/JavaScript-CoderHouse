// Calculadora de impuestos en dólares
// Declaración de variables

let dolares = parseInt(prompt("Ingrese el monto de su compra en dólares: "));
let cambio = parseInt(prompt("¿A qué valor está el dolar oficial hoy?"));
let valor;
let impuestoPais;
let impuestoGan;
let final;
let total;

// Funciones que realizan los cálculos
function calcularImpuestos (monto) {
    valor = monto * cambio;
    impuestoPais = valor * 0.30;
    impuestoGan = valor * 0.35;
    total = valor + impuestoGan + impuestoPais;
}

function pagarCon (metodo) {

    if (metodo == "dolares") {
        final = valor + impuestoGan;
    } else if (metodo == "pesos") {
        final = valor + impuestoGan + impuestoPais;
    } else {
        alert("Debe ingresar 'dolares' o 'pesos'");
    }
}

function convertirMoneda() {
    valor /= cambio;
    impuestoPais /= cambio;
    impuestoGan /= cambio;
    total /= cambio;
    final /= cambio;
}

// Llamado a la función
calcularImpuestos (dolares);
alert("El monto total a pagar es: $"+total);

let detalle = confirm ("¿Quiere saber el detalle?")

if (detalle) {
    
    let ganancias = confirm("¿Usted paga Impuesto a las Ganancias o Bienes Personales?");
    let moneda = prompt("¿Pagará en dólares o en pesos?");
    pagarCon (moneda);

    if (moneda == "dolares") {
        convertirMoneda();
        if (ganancias) {
            alert("El monto de la compra es: $"+valor+ " USD" +
            "\nEl Impuesto PAIS es: $"+impuestoPais+" USD"+
            "\nEl Impuesto a las Ganancias es: $"+impuestoGan+" USD"+
            "\nEl total es: $"+total+" USD"+
            "\nEl monto final a pagar es: $"+final+" USD, pero puede solicitar la devolución de ganancias en AFIP")
        } else {
            alert("El monto de la compra es: $"+valor+ " USD" +
            "\nEl Impuesto PAIS es: $"+impuestoPais+" USD"+
            "\nEl Impuesto a las Ganancias es: $"+impuestoGan+" USD"+
            "\nEl total es: $"+total+" USD"+
            "\nEl monto final a pagar es: $"+final+" USD")
        }  
    } else {
        if (ganancias) {
            alert("El monto de la compra es: $"+valor+ 
            "\nEl Impuesto PAIS es: $"+impuestoPais+
            "\nEl Impuesto a las Ganancias es: $"+impuestoGan+
            "\nEl total es: $"+total+
            "\nEl monto final a pagar es: $"+final+", pero puede solicitar la devolución de ganancias en AFIP")
        } else {
            alert("El monto de la compra es: $"+valor+
            "\nEl Impuesto PAIS es: $"+impuestoPais+
            "\nEl Impuesto a las Ganancias es: $"+impuestoGan+
            "\nEl total es: $"+total+
            "\nEl monto final a pagar es: $"+final)
        }
    }
} else {
    alert("Gracias por utilizar nuestro servicio");
}
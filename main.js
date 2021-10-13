// Ingreso de monto en dólares

let dolares = parseInt(prompt("Ingrese el monto de su compra en dólares: "));
let cambio = parseInt(prompt("¿A qué valor le realizan el cambio?"));
let valor;
let impuestoPais;
let impuestoGan;
let final;
let total;

let ganancias = confirm("¿Usted paga Impuesto a las Ganancias o Bienes Personales?");
let moneda = prompt("¿Pagará en dólares o en pesos?");

function calcularImpuestos (monto) {
    valor = dolares * cambio;
    impuestoPais = valor * 0.30;
    impuestoGan = valor * 0.35;
    total = valor + impuestoGan + impuestoPais;
}

function metodoPago (metodo) {

    if (metodo == "dolares") {
        final = valor + impuestoGan;
    } else if (metodo == "pesos") {
        final = valor + impuestoGan + impuestoPais;
    } else {
        alert("Debe ingresar 'dolares' o 'pesos'");
    }
}

calcularImpuestos (dolares);
metodoPago (moneda);

if (ganancias) {
    alert("Su monto en dolares es: USD" + dolares + 
    "\nEl valor al cambio ingresado: $" + valor +
    "\nImpuesto País: $" + impuestoPais + 
    "\nImpuesto a las Ganancias: $" + impuestoGan + 
    "\nTotal: $" + total +
    "\nAl abonar en "+ moneda + ": $" + final + 
    "\nUsted puede devolver el 35% de Ganancias ingresando en AFIP");
    
} else {
    alert("Su monto en dolares es: USD" + dolares + 
    "\nEl valor al cambio ingresado: $" + valor +
    "\nImpuesto País: $" + impuestoPais + 
    "\nImpuesto a las Ganancias: $" + impuestoGan + 
    "\nTotal: $" + total +
    "\nAl abonar en "+ moneda + ": $" + final + 
    "\nUsted NO puede devolver el 35% de Ganancias ingresando en AFIP");
}
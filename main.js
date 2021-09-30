// let año = parseInt(prompt("Introduzca su año de nacimiento: "));
// let mes = prompt("Introduzca su mes de nacimiento: ");
// let dia = prompt("Introduzca su día de nacimiento: ");

// let calculoEdad = 2021 - año ;
// alert("Usted nació el " + dia + " de " + mes + ", y tiene " + calculoEdad + " años.");

let numeroIngresado = parseInt(prompt("Ingrese un número y le diré si es par o impar: "));

if (numeroIngresado % 2 != 0) {
    alert("El numero " + numeroIngresado + " es impar.");
} else {
    alert("El numero " + numeroIngresado + " es par.");
}
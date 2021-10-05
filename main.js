//Imprimir una rampa de x filas según lo ingresado.

//Mientras no sea un número entre el 1 y el 10, voy a seguir pidiendo que lo ingrese.
let num;

do {
    num = parseInt(prompt("Ingrese un número del 1 al 10: "));
} while (num<1 || num>10);

for (let i = 0; i < num; i++) 
{
    console.log("#".repeat(i+1));
}

//Encontre la forma de escribir múltiples caracteres uno al lado del otro en consola usando el .repeat()
//Ya que sino me aparecía el caracter "#" y el num de la cantidad de veces que había sido impreso.
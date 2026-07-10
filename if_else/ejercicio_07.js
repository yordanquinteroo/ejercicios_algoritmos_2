/*
  Ejercicio 7 - If / Else: Precio de entrada al cine

  Un cine cobra las entradas segun la edad del espectador:
  - Menores de 5 años:        entrada GRATIS
  - De 5 a 11 años (niño):   $8.000
  - De 12 a 64 años (adulto): $15.000
  - 65 años o mas (senior):   $9.000

  Declara una variable "edad" con la edad del espectador.
  Usando if / else if / else, calcula e imprime el precio de la entrada.
*/
let edad = 20;
let precio = 0;

if (edad < 5) {
    precio = 0;
} else if (edad >= 5 && edad <= 11) {
    precio = 8000;
} else if (edad >= 12 && edad <= 64) {
    precio = 15000;
} else {
    precio = 9000;
}

console.log("Edad: " + edad);
console.log("Precio de la entrada: $" + precio);
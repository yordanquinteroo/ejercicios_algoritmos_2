/*
  Ejercicio 4 - If / Else: Descuento por monto de compra

  Una tienda aplica descuentos segun el monto total de la compra:
  - Si el monto es mayor o igual a $500.000: descuento del 20%
  - Si el monto es mayor o igual a $200.000: descuento del 10%
  - Si el monto es mayor o igual a $100.000: descuento del 5%
  - Si el monto es menor a $100.000:         sin descuento

  Declara una variable "monto" con el valor de la compra.
  Calcula e imprime el valor del descuento y el precio final a pagar.
*/
let monto = 0;
let descuento = 0;
let precioFinal = 0;

if (monto >= 500000) {
    descuento = monto * 0.20;
} else if (monto >= 200000) {
    descuento = monto * 0.10;
} else if (monto >= 100000) {
    descuento = monto * 0.05;
} else {
    descuento = 0;
}

precioFinal = monto - descuento;

console.log("Monto de la compra: $" + monto);
console.log("Descuento: $" + descuento);
console.log("Precio final a pagar: $" + precioFinal);
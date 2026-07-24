/*
  Ejercicio 10 - Ternario: Tarifa de parqueadero

  Un parqueadero cobra de forma diferente segun el tipo de vehiculo:
  - Moto:  $2.000 por hora
  - Carro: $5.000 por hora

  Declara una variable "esMoto" con valor true o false,
  y una variable "horas" con la cantidad de horas que el vehiculo estuvo parqueado.
  Usando el operador ternario, calcula la tarifa por hora y luego el total a pagar.
  Imprime el tipo de vehiculo, las horas parqueadas y el total.
*/
// Ejercicio - Operador ternario: Cobro de parqueadero

var esMoto = true;
var horas = 4;

var tarifa = esMoto ? 2000 : 5000;
var total = tarifa * horas;

console.log("Tipo de vehículo: " + (esMoto ? "Moto" : "Carro"));
console.log("Horas parqueadas: " + horas);
console.log("Total a pagar: $" + total);


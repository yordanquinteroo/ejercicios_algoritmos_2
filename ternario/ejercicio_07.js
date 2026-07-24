/*
  Ejercicio 7 - Ternario: Disponibilidad de stock

  Una tienda en linea muestra si un producto esta disponible o agotado.
  Declara una variable "unidadesEnStock" con la cantidad de unidades disponibles.
  Usando el operador ternario, asigna a la variable "estadoProducto"
  el mensaje "Disponible" si hay al menos 1 unidad, o "Agotado" si es 0.
  Imprime el nombre del producto y su estado.
*/
// Ejercicio - Operador ternario: Estado de un producto

var nombreProducto = "Audífonos";
var unidadesEnStock = 5;

var estadoProducto = (unidadesEnStock >= 1) ? "Disponible" : "Agotado";

console.log("Producto: " + nombreProducto);
console.log("Estado: " + estadoProducto);

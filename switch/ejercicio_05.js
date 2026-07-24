/*
  Ejercicio 5 - Switch: Estacion del año

  Declara una variable "mes" con un numero del 1 al 12.
  Usando switch con casos agrupados, determina la estacion del año
  correspondiente (para el hemisferio sur de Colombia / America del Sur):
  - Diciembre, Enero, Febrero (12, 1, 2):       "Verano"
  - Marzo, Abril, Mayo (3, 4, 5):               "Otono"
  - Junio, Julio, Agosto (6, 7, 8):             "Invierno"
  - Septiembre, Octubre, Noviembre (9, 10, 11): "Primavera"
  Imprime el mes y la estacion correspondiente.
*/

// Ejercicio 5 - Switch: Estación del año

var mes = 7;

switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Mes: " + mes);
        console.log("Estación: Verano");
        break;

    case 3:
    case 4:
    case 5:
        console.log("Mes: " + mes);
        console.log("Estación: Otoño");
        break;

    case 6:
    case 7:
    case 8:
        console.log("Mes: " + mes);
        console.log("Estación: Invierno");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Mes: " + mes);
        console.log("Estación: Primavera");
        break;

    default:
        console.log("Mes no válido.");
        break;
}
/*
  Ejercicio 10 - Switch: Signo zodiacal

  Declara una variable "mes" con el mes de nacimiento de una persona (1 al 12).
  Usando switch con casos agrupados, determina el signo zodiacal.
  (Se usa el primer signo que cubre la mayor parte del mes para simplificar.)

  1  → Capricornio
  2  → Acuario
  3  → Piscis
  4  → Aries
  5  → Tauro
  6  → Geminis
  7  → Cancer
  8  → Leo
  9  → Virgo
  10 → Libra
  11 → Escorpio
  12 → Sagitario

  Imprime el mes de nacimiento y el signo zodiacal correspondiente.
*/
// Ejercicio 10 - Switch: Signo zodiacal

var mes = 8;

switch (mes) {
    case 1:
        console.log("Mes: " + mes);
        console.log("Signo: Capricornio");
        break;

    case 2:
        console.log("Mes: " + mes);
        console.log("Signo: Acuario");
        break;

    case 3:
        console.log("Mes: " + mes);
        console.log("Signo: Piscis");
        break;

    case 4:
        console.log("Mes: " + mes);
        console.log("Signo: Aries");
        break;

    case 5:
        console.log("Mes: " + mes);
        console.log("Signo: Tauro");
        break;

    case 6:
        console.log("Mes: " + mes);
        console.log("Signo: Géminis");
        break;

    case 7:
        console.log("Mes: " + mes);
        console.log("Signo: Cáncer");
        break;

    case 8:
        console.log("Mes: " + mes);
        console.log("Signo: Leo");
        break;

    case 9:
        console.log("Mes: " + mes);
        console.log("Signo: Virgo");
        break;

    case 10:
        console.log("Mes: " + mes);
        console.log("Signo: Libra");
        break;

    case 11:
        console.log("Mes: " + mes);
        console.log("Signo: Escorpio");
        break;

    case 12:
        console.log("Mes: " + mes);
        console.log("Signo: Sagitario");
        break;

    default:
        console.log("Mes no válido.");
        break;
}


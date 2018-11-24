//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E M P L O   1  PROMPT: :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//



/* var saludo = "hola guachiiin"

console.log(saludo + " mauri"); */


/* var nombre = prompt("tu nombre papá");

console.log("hola " + nombre); */


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E M P L O   2 OPERADORES : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

/* var num1 = 5;
var num2 = 4;
//var res = num1 - num2;
//var res = num1 + num2;
//var res = num1 * num2;
var res = num1 / num2;
console.log(res); */

//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: E J E M P L O   3   C O N D I C I O N A L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//

/* var name = prompt("como te llamas");

if (name.toLowerCase() === "max") {
    console.log("sos vooo");
} else if (name.toLowerCase() === "tom") {
    console.log("sos vooo TOM");
} else {
    console.log("no so vooo");
} */





var num1 = prompt("numero uno");
var sign = prompt("signo?");
var num2 = prompt("numero dos");

//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: U S A R   I F : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//




if (sign === "+") {
    console.log(parseInt(num1) + parseInt(num2));
} else if (sign === "-") {
    console.log(num1 - num2);
} else if (sign === "*") {
    console.log(num1 * num2);
} else { console.log("solo sumar, restar o multiplicar"); }

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: O   U S A R   S W I T C H : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//



switch (sign) {
    case "+":
        console.log(parseInt(num1) + parseInt(num2));
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    default:
        console.log("solo sumar, restar o multiplicar");
}
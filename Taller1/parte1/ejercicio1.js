/**
 * 1. ¿De cuentos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 * combinación con n=10 y k=4
 */

 const factorial = require("./Factorial");
 const ejercicio1 = () => 
 {
    return (factorial(10)/(factorial(6)*factorial(4)));
 }
 console.time("ejercicio1");
 console.log("En una fila de 10 sillas se puede ubicar de "+ejercicio1()+" maneras a 4 personas");
 console.timeEnd("ejercicio1");


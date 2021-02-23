/**
 * Un restaurante de fideos ofrece 5 tipos de fideos para elegir. Cada plato viene con una
   de 4 carnes y una de 6 salsas diferentes a elección. ¿Cuántas combinaciones se pueden
   hacer?
   por combinacion: n=15 y k=3
 */

 const factorial = require('./Factorial');
 const ejercicio6 = () => 
 {
     return(factorial(15)/(factorial(12)*factorial(3)))    
 }

 console.log("se pueden hacer "+ejercicio6()+" combinaciones");


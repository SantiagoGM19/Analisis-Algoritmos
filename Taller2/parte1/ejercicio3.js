/**
 * En tres mercados de una ciudad se venden arroz por bulto; en el primer mercado hay
   disponibles seis tiendas, en el segundo cuatro y en el tercer mercado cinco tiendas. ¿De
   cuántas maneras puede realizarse la compra de un bulto de arroz?

   por principio de adicion 6+4+5 = 15
   por combinación si n=15 y k=1 al igual que por permutación
 */

const factorial = require("./Factorial")

 const ejercicio3 = () => 
 {
     return (factorial(15)/factorial(15-1))    
 }

 console.log("se puede comprar un bulto de arroz de "+ejercicio3()+" maneras");

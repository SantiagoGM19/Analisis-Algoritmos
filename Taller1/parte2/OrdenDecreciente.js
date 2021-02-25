const yargs = require('yargs');
const argumentos = yargs.argv;

nro = argumentos.n;

let array = [];
const OrdenarNumeros = (n) => 
{
    if(n == 0)
    {
        return array;
    }
    array.push(n);
    return OrdenarNumeros(n-1);
}
//Datos de entrada utilizados
// n=25, n=150, n=3000
console.time("ArrayDecreciente");
console.log(OrdenarNumeros(nro));
console.timeEnd("ArrayDecreciente");

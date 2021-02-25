const yargs = require('yargs');
const argumentos = yargs.argv;

nro = argumentos.n;

let array = [];
const ArrayAleatorio = (nro) => 
{
    longitud = array.length;
    if(nro == 0)
    {
        return array;
    }
    numeroAleatorio = Math.random()*10;
    array.push(numeroAleatorio - numeroAleatorio%1);
    return ArrayAleatorio(nro-1);    
}

console.time("Array");
console.log(ArrayAleatorio(nro));
console.timeEnd("Array");
//Datos de entrada utilizados
//n=10, n=100, n=1000


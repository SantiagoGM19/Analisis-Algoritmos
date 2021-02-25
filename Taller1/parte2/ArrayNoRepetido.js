const yargs = require('yargs');
const argumentos = yargs.argv;

nro = argumentos.n;
let array = [];
cont = 0;
const ArrayAleatorio = (num) => 
{
    if(num == 0)
    {
        return array;
    }

    numeroAleatorio = Math.random()*1000;
    NumeroEntero = numeroAleatorio - numeroAleatorio%1;
    console.log(NumeroEntero+" "+cont++);
    if(verificar(array,0,NumeroEntero))
    {
        return ArrayAleatorio(num)
    }
    else
    {
        array.push(NumeroEntero);
    }    
    return ArrayAleatorio(num-1);    
}

const verificar = (array, n, numeroRepetido) => 
{
    if(array.length == 0)
    {
        return false;
    }
    if(array[n-1] == numeroRepetido)
    {
        return true;
    }
    if(array.length == n)
    {
        return false;
    }
    return verificar(array,n+1,numeroRepetido);
}

//Datos de entrada utilizados
// n=50, n=100, n=1000

console.time("Array no repetido");
console.log(ArrayAleatorio(nro));
console.timeEnd("Array no repetido");

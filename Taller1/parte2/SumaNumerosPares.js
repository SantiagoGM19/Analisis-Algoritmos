const yargs = require('yargs');
const argumentos = yargs.argv;

nro = argumentos.n;

if(nro%2 != 0)
{
    console.log("El número ingresado es impar, digite de nuevo el número");
}
else
{
    let suma = 0;
    const Sumar = (n) => 
    {
        suma+=n;
        if(n == 0)
        {
            return suma;
        }
        return Sumar(n-2);
    }   
    console.time("Suma");
    console.log(Sumar(nro));
    console.timeEnd("Suma");
}
//Datos de entrada utilizados
// n=10, n=4500, n=10000

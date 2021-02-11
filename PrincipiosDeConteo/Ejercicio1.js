const yargs = require('yargs');
const argumentos = yargs.argv;

const resultado = () => 
{
    let nroVestidos = argumentos.vestidos;
    let nroConjuntos = argumentos.conjuntos
    contador = 1;
    for (let i = 0; i < nroVestidos; i++) 
    {
        console.log(contador + ") vestido numero: " + (i+1));
        contador++;
    }
    console.log("-------------------------------------------------");
    for (let j = 0; j < nroConjuntos; j++) 
    {
        console.log(contador + ") conjunto numero: " + (j+1));
        contador++;
    }
    console.log("-------------------------------------------------");
    console.log("Se puede vestir de " + (contador-1) + " maneras");
}

resultado();



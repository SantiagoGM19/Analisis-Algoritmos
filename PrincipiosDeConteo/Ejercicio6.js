const yargs = require('yargs');
const argumentos = yargs.argv;

const resultado = () => 
{
    let nroTiendasMercado1 = argumentos.mercado1;
    let nroTiendasMercado2 = argumentos.mercado2;
    let nroTiendasMercado3 = argumentos.mercado3;
    let contador = 0;
    console.log("Mercado 1");
    for (let i = 0; i < nroTiendasMercado1; i++) 
    {
        console.log("Tienda numero: ",i);
        contador++;
    }
    console.log("----------------------------------");
    console.log("Mercado 2");
    for (let j = 0; j < nroTiendasMercado2; j++) 
    {
        console.log("Tienda numero: ",j);
        contador++;
    }
    console.log("----------------------------------");
    console.log("Mercado 3");
    for (let k = 0; k < nroTiendasMercado3; k++) 
    {
        console.log("Tienda numero: ",k);
        contador++;
    }
    console.log("----------------------------------");    
    console.log("un bulto de arroz se puede comprar de ",contador," maneras");
}

resultado();
const yargs = require('yargs');
const argumentos = yargs.argv;

const resultado = () => 
{
    nroChicos = argumentos.chicos;
    nroChicas = argumentos.chicas;

    contador = 0;
    for (let i = 1; i <= nroChicos; i++) 
    {
        for (let j = 1; j <= nroChicas; j++)
        {
            console.log("niño " + i + " hace pareja con la niña número " + j);
            contador++;
        }   
    }
    console.log("-------------------------------------------------");
    console.log("Se pueden formar " + contador + " parejas");
}

resultado();
const yargs = require('yargs');
const argumentos = yargs.argv;

const resultado = () => 
{
    nroPaises = argumentos.paises;
    contador = 0;
    for (let i = 1; i <= nroPaises; i++) 
    {
        for (let j = 1; j <= nroPaises; j++) 
        {
            console.log("embajador del pais ",i," en el pais ",j);
            contador++;
        }
    }
    console.log("-------------------------------------------------");
    console.log("hay un total de ",contador," embajadores");
}

resultado();
const yargs = require('yargs');
const argumentos = yargs.argv;

const resultado = () => 
{
    let nroLibrosEstadistica = argumentos.estadistica;
    let nroLibrosMatematicas = argumentos.matematicas;
    let contador = 0
    for (let i = 1; i <= nroLibrosEstadistica; i++) 
    {
        console.log("libro de estadistica con autor numero: ",i);
        contador++;
    }
    console.log("-------------------------------------------------");
    for (let j = 1; j <= nroLibrosMatematicas; j++) 
    {
        console.log("libro de matematicas con autor numero: ",j);
        contador++;
    }
    console.log("-------------------------------------------------");
    console.log("existen ",contador," opciones diferentes");
}

resultado();
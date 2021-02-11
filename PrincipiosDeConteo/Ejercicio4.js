const resultado = () => 
{
    contNumeros = 0;
    for (let i = 1; i < 1000; i++) 
    {
        let numeros = 100;
        let auxiliar = numeros;
        let cifras = 0;
        while(auxiliar>=1)
        {
            auxiliar /= 10;
            cifras++;
        }
        if(cifras == 3)
        {
            contNumeros++;
            numeros++;
        }
    }

    console.log("Existen ", contNumeros, " numeros de 3 cifras que no empiezan con 0");
}

resultado();

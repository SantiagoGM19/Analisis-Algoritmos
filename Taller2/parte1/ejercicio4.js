/**
 * Veinte países mantienen relaciones diplomáticas, cada país tiene un embajador en los
   otros países. Indique la cantidad de embajadores que hay en total.
   cada pais tiene 19 embajadores en los otrso 19 paises (con el suyo seria 20 pero se excluye obviamente)
   por principio de multiplicacion 20x19 = 380
 */



const ejercicio4 = () => 
{
    contador = 0;
    for (let i = 1; i <= 20; i++) 
    {
        for (let j = 1; j <= 20; j++) 
        {
            if(i==j)
            {
                if(i==20)
                {
                    break;
                }
                else
                {
                    j++;
                }
            }
            console.log("embajador del pais ",i," en el pais ",j);
            contador++;
        }
    }
    console.log("-------------------------------------------------");
    console.log("hay un total de ",contador," embajadores");    
}

ejercicio4();
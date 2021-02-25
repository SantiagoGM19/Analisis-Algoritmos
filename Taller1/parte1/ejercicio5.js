/**
 * Sofia trabaja en una tienda de ropa. Se le ha asignado la tarea de vestir a un maniquí
  con una falda, una blusa y un par de zapatos de una exposición de faldas, blusas y
  zapatos que hacen juego. Ya que todas las prendas combinan, ella puede elegir
  cualquier blusa, cualquier falda y cualquier par de zapatos y el atuendo se verá bien. Si
  hay 3 faldas, 5 blusas y 2 pares de zapatos, ¿De cuántas maneras distintas puede vestir
  al maniquí?\

  por principio de multiplicacion 3x5x2=30
 */

 const ejercicio5 = () => 
 {
     cont = 0;
     for (let i = 0; i < 3; i++) 
     {
        for (let j = 0; j < 5; j++) 
        {
            for (let k = 0; k < 2; k++) 
            {
                cont++;     
            }     
        }     
     }
     return cont;
 }
 console.time("ejercicio5");
 console.log("el maniquí se puede vestir de "+ejercicio5()+" maneras distintas");
 console.timeEnd("ejercicio5");
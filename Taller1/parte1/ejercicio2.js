/**
 * Entre Manizales y Armenia hay 3 carreteras ¿ De cuantos modos puede viajarse de
   Manizales a Armenia?
   Aplicando principio de adicion 1+1+1=3
 */

 const ejercicio2 = () => 
 {
    cont = 0
    for (let i = 1; i <= 3; i++) 
    {
        console.log("viaja por la carretera: "+i);
        cont++;
    }
    console.log("-----------------");
    return cont;    
 }
 console.time("ejercicio2");
 console.log("se puede viajar de Manizales a Armenia de "+ejercicio2()+" maneras");
 console.timeEnd("ejercicio2");
 
const edad = parseInt(prompt("Por favor ingresa tu edad:"));

if( isNaN( edad ) ) console.log("Ingresaste un valor errado"); 

else if ( edad >= 18 ) console.log("Eres mayor de edad");

else console.log("Eres menor de edad");
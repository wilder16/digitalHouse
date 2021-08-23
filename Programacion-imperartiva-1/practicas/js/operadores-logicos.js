// igualdad 
console.log( 10 == 15 );

// desigualdad 
console.log( 10 != 15 );

// comparacion estricta 
console.log( 100 == "100" ); // compara el valor 
console.log( 110 === "110" ); // compara el valor y el tipo, igualdad estricta 

console.log( 10 !== "10" ); // desigualdad estricta

// comparacion 
console.log( 15 > 15 ); // mayor que 
console.log( 15 >= 15 ); // mayor igual que 
console.log( 10 < 15 ); // menor que
console.log( 10 <= 15 ); // menor igual que

// and && => todo los valores deben eveluar true para que el resultado sea true 
console.log( 15 > 10 && 10 < 20);

// or || => al menos un valor debe evaluar como true para que el resultado sea true
console.log( 15 === 15 || 10 < 5 );

// not ! niega la condicion
console.log( !( 15 === 15 ) || 10 < 5 );

// los siguientes valores son siempre falsy:

// false
// 0 (cero)
// "" (string vacío)
//  null
// undefined
// NaN (Not a Number. Ejemplo: el resultado de 1 dividido por 0)

// todo lo demás es truthy eso incluye:

//  "0" (una cadena que contenga un simple 0)
// "false" (un string que contenga el texto “false”)
// [] (un arreglo vacío)*
// {} (un objeto vacío)*
//  function(){} (una función vacía)
console.log(8-15 == 8 || 7>6 == -2);
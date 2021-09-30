let notas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// .map me recibe un callback y retorna un array con los datos modificados segun el callback ejecutado
let notasHataEl100 = notas.map(function (nota) {
    return nota * 10;
});
console.log(notasHataEl100);

// .filter me recibe un callback y retorna un array con los datos que cumplen con la condicion
let notasAprobadas = notasHataEl100.filter((nota) => nota >= 70);
console.log(notasAprobadas);

// .reduce me recibe un callback y retorna un unico valor aplicando la logica del callback
let sumaNotas = notasHataEl100.reduce((acumulador, nota) => acumulador + nota)
console.log(sumaNotas);

// .forEach me recibe un callback y ejecuta la logica del callback sin retornar nada 
notasHataEl100.forEach((nota, indice) => console.log(`En la posicion ${indice}, tengo la nota ${nota}`));



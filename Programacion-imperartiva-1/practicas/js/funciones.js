// estructura basica 
function nombreFuncion(parametro1, parametro2){  // se utiliza la palabra reservada function 
    return ; //cuerpo de la funcion return se utiliza si queremos que la funcion retorne un resultado
}

// funcion declarada son las que se declaron utlizando la esctructura basica 

// funcion expresada son las que se asignan como valor a una variable, la funcion en si no tiene nombre es una funcion anonima 
let variable1 = function (parametro1, parametro2){
    return; // para invocarla podemo utilizar el nombre de la variable que se declaro 
}

// invocacion de una funcion 
nombreFuncion(); // cuando no se envian los argumentos javascript le asigna undefined a los parametros 

function saludar(nombre = 'visitante', apellido = 'anónimo') { // la forma de definir valores por defecto
return 'Hola ' + nombre + ' ' + apellido;
}

console.log(saludar());
console.log(saludar("Wilder", "Bernal"));

// guardando datos que retorna una funcion
let variable2 = saludar("Isai", "Bernal");
console.log(variable2);

// scope, hace referencia al alcance que tiene una variable 
// alcance locar: let; const
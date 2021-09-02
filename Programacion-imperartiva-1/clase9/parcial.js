console.log(typeof("NaN"));
var str = "NaN";
console.log(typeof(str));
let variable1 = undefined*4;
console.log(typeof(variable1));
let variable2 = 5/0;
console.log(typeof(variable2));

let num = 0; 
console.log(--num);

console.log(5 + 3 + -12 == 5 && (-12 / 3 < 5 || 3 != -12));

if(true){
    console.log("false");
}else {
    console.log("true")
}

let nota = 6; let feedback = ''; if (nota > 6) { feedback = "Aprobado" }else{ feedback = "Desaprobado" }
console.log(feedback);

function sumatoria(num1, num2){
    if( num1 > 10 && num2 > 10 ){
        return `la suma de los dos numeros ingresados es: ${num1 + num2}`;
    }else if( num1 <= 10 && num2 <= 10){
        return "Ingrese un numero mayor a 10 para ambos terminos";
    }else if( num1 <= 10){
        return "Ingrese un numero mayor a 10 para el primer termino";
    }
    else{
        return "Ingrese un numero mayor a 10 para el segundo termino"; 
    }
}
console.log(sumatoria(9, 1011));
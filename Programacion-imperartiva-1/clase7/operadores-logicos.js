let edad = 14; 
let altura = 1.25; 
console.log( ( edad > 12 ) && ( altura > 1.30));

let luz = true;
let movimientoRapido = false;

function usoDeFlash(luz, movimientoRapido){
    if((luz == false) || (movimientoRapido == true)){
        return "use flash";
    }else{
        return "no use flash";
    }
}
console.log(usoDeFlash(true, false));

let nota1 = 6;
let nota2 = 5;
let examenFinal = 5;

console.log( (nota1 > 7 && nota2 > 7) || ( examenFinal >= 4) );

let hizoTarea = true; 
let practicasPiano = false; 
let deMemoria = false;

function verTv(hizoTarea, practicasPiano, deMemoria){
    if( ( hizoTarea == true && practicasPiano == true && deMemoria == true)){
        return "Vea TV";
    }else{
        return "No vea TV";
    }
}
// console.log(verTv(hizoTarea, practicasPiano, deMemoria));
verTv(hizoTarea, practicasPiano, deMemoria);
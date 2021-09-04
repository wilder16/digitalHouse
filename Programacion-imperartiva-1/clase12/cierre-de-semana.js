const alicia = [23, 69, 32];

const bob = [12, 67, 43];

function encontrarGanador(a, b) {
    let puntosPrimerParticipante = 0;
    let puntosSegundoParticipante = 0;
    for( let i = 0; i < 3 ; i++ ){
        if ( a[i] > b[i] ) {
            puntosPrimerParticipante ++;
        }else if ( a[i] < b[i] ) {
            puntosSegundoParticipante ++  
        }
    }
    if(puntosPrimerParticipante > puntosSegundoParticipante){
        return `El ganador es el primer participande con los punto ${puntosPrimerParticipante}`
    } else if(puntosPrimerParticipante < puntosSegundoParticipante){
        return `El ganador es el primer participande con los punto ${puntosSegundoParticipante}`
    }else {
        return "Los participantes tienen los mismos puntajes";
    }
}
    
    console.log(encontrarGanador(alicia, bob));

    // Ejercicios extra bonus

function digitalHouse(num1, num2){

    for (let i = 1; i <= 100; i++) {
        if( i % num1 === 0 && i % num2 === 0){
            console.log("Digital House");
            continue;
        } else if ( i % num1 === 0 ) {
            console.log("Digital");
            continue;
        } else if ( i % num2 === 0) {
            console.log("House");
        }
    }
}
digitalHouse(0, 0);

let vector = [-1, 2, 3, 4, 5];
function sumArray(array){
    let suma = 0; 
    for (const i of array) {
        suma += i 
    }
    return `La suma de los numeros de la array es ${suma}`
}

console.log(sumArray(vector));

let vector2 = ['H', 'O', 'L', 'A'];
function join(array){
    let union = '';
    for (const i of array) {
        union += i 
    }
    return union;
}

console.log(join(vector2))




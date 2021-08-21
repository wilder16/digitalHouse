// calculadora primera parte 

function sumar( num1, num2 ){ 
    return num1 + num2;
}

function restar( num1, num2 ){ 
    return num1 - num2;
}

function multiplicar( num1, num2 ){ 
    return num1 * num2;
}

function dividir( num1, num2 ){ 
    if( num2 === 0 ){
        return console.log("No se puede divirdir por cero");
    }else{
        return num1 / num2;
    } 
}

// segunda parte 
console.log( "-------------- Testeo de Operaciones / Calculadora --------------" );

console.log( sumar( 1, 2 ) );
console.log( restar( 3, 2 ) );

console.log( multiplicar( 1, 2 ) );
console.log( dividir( 3, 2 ) );
console.log( dividir( 3, 0 ) );

// tercera parte 

// 1
const numero1 = 10;
function cuadradoDeUnNumero(valor){
    return multiplicar( valor, valor )
};
console.log(`El cuadrado del número ingresado es:${cuadradoDeUnNumero(numero1)}`);

// 2
const numero2 = 10;
const numero3 = 5;
const numero4 = 20;

function promedioDeTresNumeros(valor1,valor2,valor3){
    let resultado = sumar( sumar( valor1, valor2 ), valor3 ) 
    resultado = dividir( resultado, 3)
    return resultado;
};
console.log(`El promedio de los numeros es:${promedioDeTresNumeros(numero2,numero3,numero4)}`);

// 3 
function calcularPorcentaje( numTotal, porcentaje ){
    let resultado; 
    resultado = multiplicar( numTotal, porcentaje );
    resultado = dividir( resultado, 100 );
    return resultado;
}
console.log( calcularPorcentaje( 300, 15 ) );

// 4
const numero5 = 2;
const numero6 = 200;

function generadorDePorcentaje( valor1, valor2 ){
    let resultado = multiplicar( valor1, 100 );
    resultado = dividir( resultado, valor2 )   
    return resultado;
};
console.log(`${numero5} es el ${generadorDePorcentaje(numero5,numero6)}% de ${numero6}`);
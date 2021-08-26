// Ejecicio 1
let edad=25;

function esImpar(num){
    return (!(num%2)) ? "" : console.log("Sabias que tu edad es impar");
}

if (edad < 0){
 console.log("Error edad invaida. Por favor ingrese un numero valido");
    esImpar(edad) ; 
}
else if(edad<18) {
console.log("No puede pasar al bar.");
    esImpar(edad) ; 
}
else if(edad<21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.");
    esImpar(edad) ; 
}
else{
console.log("Puede pasar al bar y tomar alcohol.");
console.log("Felicitaciones por ser mayor de edad.");
esImpar(edad); 
}

//// Ejecicio 2
function totalAPagar(vehiculo, litroConsumidos){
    
    switch(vehiculo){
        case "coche":
            if(litroConsumidos < 25 ){
                return ( litroConsumidos * 86  + 50);
            }else{
                return (litroConsumidos * 86 + 25);
            }
        case "moto":
            if(litroConsumidos < 25 ){
                return ( litroConsumidos * 70  + 50);
            }else{
                return (litroConsumidos * 70 + 25);
            }
        case "autobús":
            if(litroConsumidos < 25 ){
                return ( litroConsumidos * 55  + 50);
            }else{
                return (litroConsumidos * 55 + 25);
            }
        default:
    }
}
 console.log("El total a pagar es " + totalAPagar("moto", 80));

 // Ejecicio 3

 function totalPagarSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precioTotal = 0 ;
    switch( base ){
        case "pollo":
            precioTotal = 150;
            return precioTotal += selecionPan(pan) + adicional(queso, tomate, lechuga, cebolla, mayonesa, mostaza);
       
        case "carne":
            precioTotal = 200;
            return precioTotal += selecionPan(pan) + adicional(queso, tomate, lechuga, cebolla, mayonesa, mostaza);
       
        case "veggie":
            precioTotal = 100;
            return precioTotal += selecionPan(pan) + adicional(queso, tomate, lechuga, cebolla, mayonesa, mostaza);
    }

    function selecionPan(pan){
        let precioPan;
        switch( pan ){
            case "blanco":
                return precioPan = 50;
            case "negro":
                return  precioPan = 60;
            case "gluten":
                return  precioPan = 75;
        }
    }

    function adicional( queso, tomate, lechuga, cebolla, mayonesa, mostaza ){
        let acumulador = 0;
        if ( queso ) {
            acumulador = 20;
        }else if ( tomate ){
            acumulador += 15; 
        }else if ( lechuga ){
            acumulador += 10; 
        }else if ( cebolla ){
            acumulador += 15; 
        }else if ( mayonesa ){
            acumulador += 5; 
        }else if ( mostaza ){
            acumulador += 5; 
        }
        return acumulador;
    }
 }

 console.log("El total a pagar es por el Sandwich: " + totalPagarSandwich("pollo", "blanco", true, false, false, false, false, false));

 // bonus 
 
 // bonus 1 
 function numeroSecreto( num ){
     let random = (Math.random() * 10).toFixed(0);
     if( num == random){ 
         return "Felicitaciones le acertaste el numero secreto";
     } else { 
         return `Lo siento no le atinaste al numero secreto, tu ingresaste el ${num} y el numero secreto es ${random}` ;
     }
 }
 console.log(numeroSecreto(5));

 // bonus 2
 function abrirParacaidas(velocidad, altura){
     if (velocidad < 1000 && (altura >= 2000 && altura < 3000)){
         return "Abra el paracaidas"
     }else{
        return "No abra el paracaidas"
     }
 }

 console.log(abrirParacaidas(700, 2500));

 // bonus 3
function traductor( palabra ){

    switch ( palabra ){
        case "casa":
            return "home";
        case "perro":
            return "dog";
        case "pelota":
            return "ball";
        case "arbol":
            return "tree";
        case "genio":
            return "genius";
        default:
            return "La palabra ingresada es incorrecta";
    }
}

console.log(traductor("perro"));

// bonus 4 
function valoracionPelicula( valoracion ){

    switch ( valoracion ){
        case "Muy Mala":
            return `Calificaste la película como ${valoracion} .Lo lamentamos mucho.`;
        case "Mala":
            return `Calificaste la película como ${valoracion} .Lo lamentamos mucho.`;
        case "Mediore":
            return `Calificaste la película como ${valoracion} .Lo lamentamos mucho.`;
        case "Buena":
            return `Calificaste la película como ${valoracion} .Nos da mucho gusto eso.`;
        case "Muy Buena":
            return `Calificaste la película como ${valoracion} .Nos da mucho gusto eso.`;
        default:
            return "Ingresaste un valor inválido";
    }
}

console.log(valoracionPelicula("Muy Mala"));

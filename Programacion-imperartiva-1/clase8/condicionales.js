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
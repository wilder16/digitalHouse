let opcionUsuario = parseInt(prompt("piedra(1), papel(2) o tijera(3)"));

let random  = () => parseInt(Math.random()*3+1);
console.log("La opción del usuario es: " + opcionUsuario)
let maquina = random();
console.log("La opción de la maquina es: " + maquina);

function juego (opcionUsuario, opcionMaquina){
    switch (opcionUsuario) {
        case 1:
            return mensaje = opcionMaquina == 1 ? "Empató" : opcionMaquina == 2 ? "Pierde" : "Gana";
        case 2:
            return mensaje = opcionMaquina == 2 ? "Empató" : opcionMaquina == 1 ? "Gana" : "Pierde";

        case 3:
            return mensaje = opcionMaquina == 3 ? "Empató" : opcionMaquina == 1 ? "Pierde" : "Gana";
    }
}
console.log("El usuario " + juego(opcionUsuario, maquina));






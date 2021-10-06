const hambreMin = 0;
const difHambre = 23;
const saludMax = 100;
const difSalud = 25;
const bano = 5;

const mascota = {
    nombre: "Tilin",
    edad: 0,
    hambre: 0,
    salud: 100,
    limpieza: 100,
    sigueConVida: function () {
        return this.edad < 30 && this.hambre < 100 && this.salud > 0
    },
    vivir: function () {
        console.log("estoy viviendo...");
        this.edad += 1;
        this.hambre += 25;
        this.salud -= 30;
        this.limpieza -= 10;
    },
    comer: function () {
        console.log("mmh ñaamm ñaaamm...")
        if (this.hambre - difHambre >= hambreMin ) {
            this.hambre -= difHambre;
        } else {
            this.hambre = 0;
        }
    },
    curar: function () {
        console.log("Me estoy curando..");
        if (this.salud + difSalud <= saludMax) {
            this.salud += difSalud;
        } else {
            this.salud = saludMax;
        }
    },
    chequeo: function () {
        let msg = "";
        if (this.salud >= 40 && this.hambre <= 40) {
            msg = "Estoy genial!!";
        };
        if (this.salud <= 30 && this.hambre >= 50) {
            msg = "Me siento raro...";
        };
        if (this.hambre >= 50) {
            msg = "Tengo hambre.. Quiero comer!!"
        }
        if (this.salud <= 30) {
            msg = "Me siento muy mal..."
        }
        console.log(msg);
    },
    status: function () {
        return {
            edad: this.edad,
            hambre: this.hambre,
            salud: this.salud,
            limpieza: this.limpieza,
        }
    }, 
    suciedad: function (){
        let msg = "";
        if(this.limpieza >= 80){
            msg = "Estoy bien limpio"
        } else if (this.limpieza < 80 && this.limpieza >= 60){
            msg = "Necesito bañarme"
        }else if (this.limpieza < 60 && this.limpieza >= 40){
            msg = "Estoy super sucio, bañame por favor";
        }else{
            msg = "Ya valí"
        }
        console.log(msg);
    },
    limpiando: function (){
        if(this.limpieza <= 60 ){
            this.limpieza += bano;
            console.log("Me bañé");
        }if(this.limpieza <= 0){
            this.limpieza = 0;
        }if(this.limpieza <= 60){
            console.log("... pero sigo sucio")
        }
    }
}

module.exports = mascota;
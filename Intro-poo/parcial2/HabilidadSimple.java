package com.company;

public class HabilidadSimple extends Habilidad {

    private Double puntaje;

    //GETs
    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    @Override
    public Double puntosDeHabilidades() {
        if( this.getNombre() == "Saltar" ) return  puntaje;
        if( this.getNombre() == "Disparar" ){
            Double puntajeTotal = puntaje + puntaje*0.1;
            return puntajeTotal;
        }
        return null;
    }
}

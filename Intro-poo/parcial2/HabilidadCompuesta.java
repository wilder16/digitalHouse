package com.company;

import java.util.ArrayList;
import java.util.List;

public class HabilidadCompuesta extends Habilidad {

    private Integer factorMultiplicador;
    private List<Habilidad> habilidadList = new ArrayList<>();

    public void setFactorMultiplicador(Integer factorMultiplicador) {
        this.factorMultiplicador = factorMultiplicador;
    }

    public void agregarHabilidad(Habilidad habilidad){
        habilidadList.add(habilidad);
    }

    @Override
    public Double puntosDeHabilidades() {
        Double puntosTotales = 0.0;
        for (Habilidad h: habilidadList) {
            puntosTotales += h.puntosDeHabilidades();
        }
        return puntosTotales * factorMultiplicador;
    }
}

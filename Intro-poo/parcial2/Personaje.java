package com.company;

import java.util.ArrayList;
import java.util.List;

public class Personaje {

    private String nombre;
    private List<Habilidad> habilidadList = new ArrayList<>();

    public Personaje(String nombre) {
        this.nombre = nombre;
    }

    public void agregar(Habilidad habilidad){
        habilidadList.add(habilidad);
    }


    public void mostrarHabilidades(){
        for (Habilidad h: habilidadList) {
            System.out.println(h.getNombre());
            System.out.println(h.puntosDeHabilidades());
        }
    }
}

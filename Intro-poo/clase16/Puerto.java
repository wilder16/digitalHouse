package com.company.clase16;

import java.util.ArrayList;
import java.util.List;

public class Puerto {

    // Atributos de clase
    private String nombre;
    private List<Contenedor> listContenedores = new ArrayList<>();
    private static final String DESCONOCIDA = "DESCONOCIDA";

    // Constructor
    public Puerto(String nombre){
        this.nombre = nombre;
    }

    // Get
    public List<Contenedor> getListContenedores() {
        return listContenedores;
    }

    // Metodos
    public void agregarContenedor(Contenedor contenedor){
       this.listContenedores.add(contenedor);
    }

    public void monstrarContenedores(){
        this.listContenedores.sort(null);
        for (Contenedor c: this.listContenedores) {
            System.out.println(c.toString());
        }
    }

    public int monstrarContenedoresPeligrosos(){
        int contador = 0;
        for (Contenedor c: this.listContenedores) {
            if(c.getProcedencia().equalsIgnoreCase(DESCONOCIDA) && c.getEsPeligro() == true){
                contador++;
            }
        }
        return contador;
    }



}

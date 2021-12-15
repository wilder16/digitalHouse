package com.company;

public class HabilidadFactory {
    //Atributos
    private static HabilidadFactory instance = null;

    //Metodo privado
    private HabilidadFactory(){

    }

    //Singleton
    public static HabilidadFactory getInstance(){
        if (instance == null){
            instance = new HabilidadFactory();
        }
        return instance;
    }

    //Factory
    public Habilidad crearHabilidad(String tipo){
        switch (tipo){
            case "Disparar":
            case "Saltar":
                return new HabilidadSimple();
            case "Disparo-al-saltar":
                return new HabilidadCompuesta();
        }
        return null;
    }
}

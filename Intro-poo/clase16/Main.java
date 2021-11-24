package com.company.clase16;

public class Main {

    public static void main(String[] args){

        Contenedor contenedor1 = new Contenedor(1, "Colombia", true);

        Contenedor contenedor2 = new Contenedor(6, "Argentina", false);

        Contenedor contenedor3 = new Contenedor(3, "Desconocida", true);

        Puerto puerto = new Puerto("Santa Marta");

        puerto.agregarContenedor(contenedor1);

        System.out.println("Numero de puerto: " + puerto.getListContenedores().size());

        puerto.agregarContenedor(contenedor2);

        System.out.println("Numero de puerto: " + puerto.getListContenedores().size());

        puerto.agregarContenedor(contenedor3);

        System.out.println("Numero de puerto: " + puerto.getListContenedores().size());

        puerto.monstrarContenedores();

        System.out.println("La cantidad de contenedores peligrosos es: " + puerto.monstrarContenedoresPeligrosos());

    }
}

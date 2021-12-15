package com.company;

public class Test {

    public static void main(String[] args) {

        HabilidadFactory factory= HabilidadFactory.getInstance();

        Habilidad habilidad1 =  factory.crearHabilidad("Saltar");
        habilidad1.setNombre("Saltar");
        ((HabilidadSimple)habilidad1).setPuntaje(7.5);

        Habilidad habilidad2 =  factory.crearHabilidad("Disparar");
        habilidad2.setNombre("Disparar");
        ((HabilidadSimple)habilidad2).setPuntaje(10.0);

        System.out.println(habilidad1.puntosDeHabilidades());
        System.out.println(habilidad2.puntosDeHabilidades());

        Habilidad habilidadCombinada =  factory.crearHabilidad("Disparo-al-saltar");
        habilidadCombinada.setNombre("Disparo-al-saltar");
        ((HabilidadCompuesta)habilidadCombinada).setFactorMultiplicador(3);

        ((HabilidadCompuesta)habilidadCombinada).agregarHabilidad(habilidad1);
        ((HabilidadCompuesta)habilidadCombinada).agregarHabilidad(habilidad2);

        System.out.println(habilidadCombinada.puntosDeHabilidades());

        Personaje personaje1 = new Personaje("Wilder");
        personaje1.agregar(habilidad1);
        personaje1.agregar(habilidad2);
        personaje1.agregar(habilidadCombinada);
        personaje1.mostrarHabilidades();


    }
}

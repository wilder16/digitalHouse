package com.company;

public class Clase1 {

    public static void main(String[] args){
        String nombreAnimal, cantidadComida, comoHace;
        int edad;

        // Primer animal
        System.out.println("Primer animal");
        nombreAnimal = "Machitas";
        edad = 2;
        cantidadComida = "kilo y medio";
        comoHace = "guau guau";
        mostrarInformacionDeAniaml(nombreAnimal, edad, cantidadComida, comoHace);

        // Segundo animal
        System.out.println("\nSegundo animal");
        nombreAnimal = "Nemo";
        edad = 1;
        cantidadComida = "140 y gramos";
        comoHace = "glu glu";
        mostrarInformacionDeAniaml(nombreAnimal, edad, cantidadComida, comoHace);

        // Tercer animal
        System.out.println("\nTercer animal");
        nombreAnimal = "Silvestre";
        edad = 3;
        cantidadComida = "medio kilo";
        comoHace = "miau miau";
        mostrarInformacionDeAniaml(nombreAnimal, edad, cantidadComida, comoHace);

        // Cuarto animal
        System.out.println("\nCuarto animal");
        nombreAnimal = "Manuelita";
        edad = 12;
        cantidadComida = "300 gramos";
        comoHace = "rrua rrua";
        mostrarInformacionDeAniaml(nombreAnimal, edad, cantidadComida, comoHace);

        // Quinto animal
        System.out.println("\nQuito animal");
        nombreAnimal = "Gardel";
        edad = 1;
        cantidadComida = "350 gramos";
        comoHace = "piau piau";
        mostrarInformacionDeAniaml(nombreAnimal, edad, cantidadComida, comoHace);

    }

    public static void mostrarInformacionDeAniaml(String nombreAnimal, int edad, String cantidadComida, String comoHace){
        System.out.println(nombreAnimal + " tiene " + edad + " años");
        System.out.println(nombreAnimal + " come " + cantidadComida + " y hace " + comoHace);
    }

}

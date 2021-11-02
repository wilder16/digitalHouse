package com.company.clase3;

/*
Desafio 1
Hacé un programa que te permita jugar a “Piedra, papel o tijera”. En primer lugar, la
aplicación solicita el nombre de cada gamer, después empieza el juego. El juego consiste
en pedir qué opción elije cada uno y sumar puntos al winner —si lo hay—. Definí y utilizá
una función llamada cualGana con dos parámetros con las jugadas de cada uno, que
devuelve 0 en caso de empate, 1 si gana el primero, 2 si gana el segundo. El juego termina
cuando el primero elije “*” como indicador de final.

Desafio 2
Modificá la función cualGana del Desafío 1 para jugar la variante Spock: Hay una
posibilidad más, el señor Spock —formado por la mano Vulcana de Star Trek— tiene otros
poderes según:
Papel desaprueba Spock
Spock destroza tijeras
Spock vaporiza piedra

 */

import java.util.Scanner;

public class PiedraPaelTijera {

    // Constantes
    private static final String PIEDRA = "PIEDRA";
    private static final String PAPEL = "PAPEL";
    private static final String TIJERA = "TIJERA";
    private static final String SPOCK = "SPOCK";

    public static void main(String[] args) {
        // Definicion de variables
        String jugador1, jugador2, eleccion1, eleccion2;
        Integer ganador, cont1 = 0, cont2 = 0;

        // Objeto Scanner
        Scanner capturador = new Scanner(System.in);

        // Capturando los nombre de los jugadores
        System.out.print("Por favor ingresa el nombre del primer jugador: ");
        jugador1 = capturador.nextLine();
        System.out.print("Por favor ingresa el nombre del segundo jugador: ");
        jugador2 = capturador.nextLine();

        while (true) {
            System.out.print("Ingrese la elección del jugador1: ");
            eleccion1 = capturador.nextLine();
            if (eleccion1.equals("*")) {
                break;
            } else {
                System.out.print("Ingrese la elección del jugador2: ");
                eleccion2 = capturador.nextLine();
                ganador = cualGana(eleccion1, eleccion2);
                if(ganador == 0){
                    System.out.println("Empate");
                }else if(ganador == 1){
                    System.out.println("Ganó: " + jugador1);
                    cont1++;
                }else {
                    System.out.println("Ganó: " + jugador2);
                    cont2++;
                }
            }
        }
        if(cont1 == cont2){
            System.out.println("Los jugadores ganaron el mismo numero de partidas");
        }else if(cont1 > cont2){
            System.out.println("El jugador que ganó más partidas fue: " + jugador1);
        }else{
            System.out.println("El jugador que ganó más partidas fue: " + jugador2);
        }
    }

    public static int cualGana(String jugador1, String jugador2) {
        if (jugador1.equalsIgnoreCase(jugador2)) {
            return 0;
        } else if ( (jugador1.equalsIgnoreCase(PIEDRA) && jugador2.equalsIgnoreCase(TIJERA)) ||
                (jugador1.equalsIgnoreCase(TIJERA) && jugador2.equalsIgnoreCase(PAPEL)) ||
                (jugador1.equalsIgnoreCase(PAPEL) && jugador2.equalsIgnoreCase(PIEDRA)) ||
                (jugador1.equalsIgnoreCase(PAPEL) && jugador2.equalsIgnoreCase(SPOCK)) ||
                (jugador1.equalsIgnoreCase(SPOCK) && jugador2.equalsIgnoreCase(TIJERA)) ||
                (jugador1.equalsIgnoreCase(SPOCK) && jugador2.equalsIgnoreCase(PIEDRA)) ) {
            return 1;
        } else {
            return 2;
        }
    }
}

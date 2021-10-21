package com.company;

import java.util.Scanner;

public class Clase2 {

    public static void main(String[] args) {

        // Definiendo las variables
        int num, num1, num2, num3;
        String cadena1, cadena2;

        // capturador
        Scanner capturador = new Scanner(System.in);

        // Ejercicio 1
        System.out.print("Por favor ingresa el numero el cual deseas saber si es primo o no: ");
        num = capturador.nextInt();
        System.out.println(esPrimo(num));

        // Ejercicio 2
        System.out.println("Determinando que numero es mayor:");
        System.out.print("Por favor ingrese el primer numero: ");
        num1 = capturador.nextInt();
        System.out.print("Por favor ingrese el segundo numero: ");
        num2 = capturador.nextInt();
        System.out.print("Por favor ingrese el tercer numero: ");
        num3 = capturador.nextInt();
        System.out.println("El numero mayor es el: " + maximoEntreTresNumeros(num1,num2,num3));

        // Ejercicio 3
        System.out.print("Por favor ingrese la primera cadena de texto: ");
        cadena1 = capturador.next();

        System.out.print("Por favor ingrese la segunda cadena de texto: ");
        cadena2 = capturador.next();
        System.out.println("Las cadenas ingresadas no coinciden: " + cadenasDeTextoDistintas(cadena1, cadena2));
    }

    public static String esPrimo(int num){
        for(int i = 2; i < num; i++){
            if(esDivisible(num, i)){
               return "No es primo";
            }
        }
        return "Es primo";
    }

    public static boolean esDivisible(int n, int divisor){
        return n % divisor == 0;
    }

    public static  Integer maximoEntreTresNumeros(Integer unNumeroA, Integer unNumeroB, Integer unNumeroC){
        if (unNumeroA > unNumeroB && unNumeroA > unNumeroC) {
            return unNumeroA;
        }
        else if (unNumeroB > unNumeroA && unNumeroB > unNumeroC) {
            return unNumeroB;
        }
        else {
            return unNumeroC;
        }
    }

    public static boolean cadenasDeTextoDistintas(String unTextoA, String unTextoB){
        return !unTextoA.equals(unTextoB);
    }




}

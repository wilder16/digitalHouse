package com.company.clase3;

/*
Implementar un programa que nos permite mostrar por consola los primeros “n” números
primeros, siendo “n” un valor numérico ingresado por consola. Por ejemplo: Con n=7, lo
que debería devolver el programa es “Los primeros 7 números primos son: 2, 3, 5, 7, 11, 13,
17”.
*/

import java.util.Scanner;

public class NumerosPrimos {

    public static void main(String[] args) {

        // Declaracion de variables
        Integer num, i = 1, contadorDeprimos = 0, contadorDivisores;
        boolean esDivisible;

        // Objeto Scanner
        Scanner capturador = new Scanner(System.in);

        System.out.print("Por favor ingrese el numero: ");
        num = capturador.nextInt();
        while (contadorDeprimos < num) {
            contadorDivisores = 1;
            for (int j = 2; j <= i; j++) {
                esDivisible = reciduoCero(i, j);
                if (esDivisible) {
                    contadorDivisores++;
                }
            }
            if (contadorDivisores == 2) {
                contadorDeprimos++;
                System.out.println(i);
            }
            i++;
        }
    }

    public static boolean reciduoCero(int num1, int num2) {
        return num1 % num2 == 0;
    }
}

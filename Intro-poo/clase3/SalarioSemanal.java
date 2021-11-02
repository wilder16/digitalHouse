package com.company.clase3;
/*
Por cuestiones laborales, se pueden trabajar hasta 40 horas semanales, si se trabajan más
horas las mismas se consideran horas extras cuyo valor es un 50% más que las horas de
trabajo normales. Crear un programa que pueda informar si el sueldo semanal de la
programadora Julieta. Ella trabajó en la última semana “x” cantidad de horas y el valor de la
hora semanal es de 875.
*/

import java.util.Scanner;

public class SalarioSemanal {

    public static final Integer HORAS_SEMANALES = 40;
    public static final Double PRECIO_HORA_SEMANAL = 875.0;
    public static final Double PORCENTAJE_PRECIO_HORA_EXTRA = 0.5;

    public static void main(String[] args) {

        // Declaracion de variables
        Integer numHoras;
        Double sueldoSemanal;

        // Objeto Scanner
        Scanner capturador = new Scanner(System.in);

        // Obteniendo las horas
        System.out.print("Por favor ingrese las semanas trabajas por Julieta: ");
        numHoras = capturador.nextInt();

        if (numHoras > HORAS_SEMANALES) {
            sueldoSemanal = HORAS_SEMANALES * PRECIO_HORA_SEMANAL + precioSemanaConHorasExtas(numHoras);
            System.out.println("El salario de la semana de trabajó de Julieta es: " + sueldoSemanal);
        } else {
            sueldoSemanal = PRECIO_HORA_SEMANAL * numHoras;
            System.out.println("El salario de la semana de trabajó de Julieta es: " + sueldoSemanal);
        }

    }

    public static Double precioSemanaConHorasExtas(Integer numeroHoras) {
        Integer horasExtras = numeroHoras - HORAS_SEMANALES;
        Double sueldoHorasExtras = horasExtras * (PRECIO_HORA_SEMANAL + PRECIO_HORA_SEMANAL * PORCENTAJE_PRECIO_HORA_EXTRA);
        return sueldoHorasExtras;
    }
}

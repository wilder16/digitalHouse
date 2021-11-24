package com.company.clase10.test;

import com.company.clase10.EmpleadoMarketing;

public class Main {

    public static void main(String[] args){

        EmpleadoMarketing empleado1 = new EmpleadoMarketing("Wilder", "Bernal", "111", "IT");
        empleado1.trabajar();
        empleado1.trabajar(8);
    }
}

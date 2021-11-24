package com.company.clase10;

public class EmpleadoRRHH extends Empleado{

    private int altasLogradas;

    public EmpleadoRRHH(String nombre, String apellido, String dni, int altasLogradas) {
        super(nombre, apellido, dni);
        this.altasLogradas = altasLogradas;
    }

    @Override
    public void trabajar(){
        System.out.println("EmpleadoRRHH " + getNombre() + " trabajando");
    }
}

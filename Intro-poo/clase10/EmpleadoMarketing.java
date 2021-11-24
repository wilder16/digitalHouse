package com.company.clase10;

public class EmpleadoMarketing extends Empleado{

    private String area;

    public EmpleadoMarketing(String nombre, String apellido, String dni, String area) {
        super(nombre, apellido, dni);
        this.area = area;
    }

    @Override
    public void trabajar(){
        System.out.println("EmpleadoMarketing " + getNombre() + " trabajando en " + area);
    }

    public void trabajar(int horasExtras){
        System.out.println("EmpleadoMarketing " + getNombre() + " trabajando en " + area + " con " + horasExtras + " hs extras");
    }
}

package com.company.clase10;

public class Empleado {
    private String nombre;
    private String apellido;
    private String dni;

    public Empleado(String nombre, String apellido, String dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    public String getNombre(){
        return nombre;
    }

    public void trabajar(){
        System.out.println("Empleado " + nombre + " trabajando");
    }

    public void descanso(){
        System.out.println("Empleado " + nombre + " descansando");
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Empleado{");
        sb.append("nombre='").append(nombre).append('\'');
        sb.append(", apellido='").append(apellido).append('\'');
        sb.append(", dni='").append(dni).append('\'');
        sb.append('}');
        return sb.toString();
    }
}

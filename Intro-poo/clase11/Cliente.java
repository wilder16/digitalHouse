package com.company.clase11;

public class Cliente {

    private String numeroCliente;
    private String nombre;
    private String apellido;
    private Integer dni;
    private Integer cuit;


    public Cliente(String numeroCliente, String nombre, String apellido, Integer dni, Integer cuit) {
        this.numeroCliente = numeroCliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cuit = cuit;
    }
}

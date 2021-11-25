package com.company.clase17;


import java.util.GregorianCalendar;

public class Paciente {
    String nombre;
    String apellido;
    String historiaClinica;
    GregorianCalendar fechaInternacion;
    GregorianCalendar fechaAlta;


    Paciente(String nombre, String apellido, String historiaClinica, GregorianCalendar fechaInternacion) throws PacienteException {   GregorianCalendar hoy= new GregorianCalendar();
        this.nombre=nombre;
        this.apellido=apellido;
        fechaAlta=null;
        if (fechaInternacion.before(hoy)) this.fechaInternacion=fechaInternacion;
        else throw new PacienteException("No puede internar en el futuro");
    }

    public GregorianCalendar getFechaInternacion() {
        return fechaInternacion;
    }

    public GregorianCalendar getFechaAlta() {
        return fechaAlta;
    }

    public void darAlta(GregorianCalendar fechaAlta) throws PacienteException {
        if (fechaAlta.after(fechaInternacion))
            System.out.println("Ok");
        else throw new PacienteException("No de alta antes de la fecha de internado");
    }



}

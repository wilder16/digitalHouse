package com.company.clase17;

public class PacienteException extends Exception{

    public PacienteException() {
    }

    public PacienteException(String message) {
        super(message);
    }

    @Override
    public String toString() {
        return "Se produjo una excepción en: " + this.getClass().getName()+"\n"+
                "Mensaje: "+this.getMessage();
    }
}

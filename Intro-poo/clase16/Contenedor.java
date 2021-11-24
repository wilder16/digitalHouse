package com.company.clase16;

public class Contenedor implements Comparable<Contenedor>{

    // Atributos de la clase
    private Integer numeroIdentificacion;
    private String procedencia;
    private Boolean esPeligro;

    // Constructor


    public Contenedor(Integer numeroIdentificacion, String procedencia, Boolean esPeligro) {
        this.numeroIdentificacion = numeroIdentificacion;
        this.procedencia = procedencia;
        this.esPeligro = esPeligro;
    }

    public Integer getNumeroIdentificacion(){
        return numeroIdentificacion;
    }

    public String getProcedencia() {
        return procedencia;
    }

    public Boolean getEsPeligro() {
        return esPeligro;
    }

    @Override
    public int compareTo(Contenedor otroContedor) {
        if(this.numeroIdentificacion > otroContedor.getNumeroIdentificacion()) return 1;
        if(this.numeroIdentificacion < otroContedor.getNumeroIdentificacion()) return -1;
        return 0;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Contenedor{");
        sb.append("numeroIdentificacion=").append(numeroIdentificacion);
        sb.append(", procedencia='").append(procedencia).append('\'');
        sb.append(", esPeligro=").append(esPeligro);
        sb.append('}');
        return sb.toString();
    }
}

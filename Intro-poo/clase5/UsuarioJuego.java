package com.company.clase5;

public class UsuarioJuego {

    // Atributos
    private String nombre, clave;
    private Double puntaje;
    private int nivel;

    // Constructor
    public UsuarioJuego(String nombre, String  clave){
        this.nombre = nombre;
        this.clave = clave;
        this.puntaje = 0.0;
        this.nivel = 0;
    }

    public void aumentarPuntaje(){
        this.puntaje++;
    }

    public void subirNivel(){
        this.nivel++;
    }

    public void bonus(int valor){
        this.puntaje+= valor;
    }

    // get and set
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public Double getPuntaje() {
        return puntaje;
    }

    public void setPuntaje(Double puntaje) {
        this.puntaje = puntaje;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    @Override
    public String toString() {
        return "UsuarioJuego{" +
                "nombre='" + nombre + '\'' +
                ", clave='" + clave + '\'' +
                ", puntaje=" + puntaje +
                ", nivel=" + nivel +
                '}';
    }
}

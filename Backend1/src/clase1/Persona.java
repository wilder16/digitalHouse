package clase1;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class Persona {

    private String nombre;
    private String apellido;
    private String email;
    private Period edad;

    public Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getApellido(){
        return apellido;
    }

    public void setApellido(String apellido){
        this.apellido = apellido;
    }

    public int getEdad(){
        return edad.getYears();
    }
    public void setEdad(String fecha){

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate fechaNacimiento = LocalDate.parse(fecha, formatter);
        this.edad = Period.between(fechaNacimiento, LocalDate.now());
    }

    public String nombreCompleto(){
        return getApellido() + ", "+ getNombre();
    }

    public Boolean esMayorDeEdad(){
        return  this.getEdad() >= 18;
    }

}

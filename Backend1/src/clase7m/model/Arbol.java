package clase7m.model;

public class Arbol {

    private String tipo;
    private Integer alto;
    private Integer ancho;
    private String color;

    private static final String ORNAMENTALES = "ORNAMENTALES";
    private static final String FRUTALES = "FRUTALES";
    private static final String FLORALES  = "FLORALES";


    public Arbol(String tipo, String color) {
        if(tipo.equalsIgnoreCase(ORNAMENTALES)){
            this.alto = 200;
            this.ancho = 400;
            this.color = color;
        }else if(tipo.equalsIgnoreCase(FRUTALES)){
            this.alto = 500;
            this.ancho = 300;
            this.color = color;
        }else{
            this.alto = 100;
            this.ancho = 200;
            this.color = color;
        }
    }



    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getAlto() {
        return alto;
    }

    public void setAlto(Integer alto) {
        this.alto = alto;
    }

    public Integer getAncho() {
        return ancho;
    }

    public void setAncho(Integer ancho) {
        this.ancho = ancho;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }


}

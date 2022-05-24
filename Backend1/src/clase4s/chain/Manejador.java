package clase4s.chain;

import clase4s.model.Correo;

public  abstract class Manejador {

    protected String direccionDeCorreoAsignada;
    protected String asuntoPorAtender;
    protected Manejador siguienteManejador;

    public Manejador getSiguiente(){
        return this.siguienteManejador;
    }

    public void setSiguiente(Manejador manejador){
        this.siguienteManejador = manejador;
    }

    public abstract String comprobarCorreo(Correo correo);

    public boolean esValidoCorreo(Correo correo){
        return correo.getDestino().equalsIgnoreCase(this.direccionDeCorreoAsignada)
                || correo.getAsunto().equalsIgnoreCase(this.asuntoPorAtender);
    }
}

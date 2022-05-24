package clase4s.chain;

import clase4s.model.Correo;

public class ManejadorGerencia extends Manejador {

    public ManejadorGerencia() {

            this.direccionDeCorreoAsignada = "gerencia@colmena.com";
            this.asuntoPorAtender = "gerencia";
    }

    @Override
    public String comprobarCorreo(Correo correo) {
        String mensaje = "";
        if(this.esValidoCorreo(correo)){
            mensaje = "Procesado.  Enviado a Gerencia";
        }else{
            if(this.getSiguiente() != null){
                mensaje = this.getSiguiente().comprobarCorreo(correo);
            }
        }
        return mensaje;
    }
}

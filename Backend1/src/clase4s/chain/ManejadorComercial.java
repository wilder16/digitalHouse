package clase4s.chain;

import clase4s.model.Correo;

public class ManejadorComercial extends Manejador {

    @Override
    public String comprobarCorreo(Correo correo) {

        String mensaje = "";
        if(this.esValidoCorreo(correo)){
            mensaje = "Procesado.  Enviado a Comercial";
        }else{
            if(this.getSiguiente() != null){
                mensaje = this.getSiguiente().comprobarCorreo(correo);
            }
        }
        return mensaje;
    }
}

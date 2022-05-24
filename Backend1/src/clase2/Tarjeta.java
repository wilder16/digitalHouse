package clase2;

import java.time.LocalDate;
import java.util.Date;

public abstract class Tarjeta {

    private Integer numeroDelFrente;
    private Integer codigoSeguridad;
    private Date fechaExpiracion;

    public Tarjeta(Integer numeroDelFrente, Integer codigoSeguridad, Date fechaExpiracion) {
        this.numeroDelFrente = numeroDelFrente;
        this.codigoSeguridad = codigoSeguridad;
        this.fechaExpiracion = fechaExpiracion;
    }

    public abstract Boolean autorizarPago(Double saldoPagar);

    public Boolean validarFechaExpiracion(){

        return fechaExpiracion.after(new Date());
    };

}

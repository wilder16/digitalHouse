package clase2;

import java.util.Date;

public class TarjetaDebito extends Tarjeta{

    private Integer saldoDisponible;

    public TarjetaDebito(Integer numeroDelFrente, Integer codigoSeguridad, Date fechaExpiracion, Integer saldoDisponible) {
        super(numeroDelFrente, codigoSeguridad, fechaExpiracion);
        this.saldoDisponible = saldoDisponible;
    }

    @Override
    public Boolean autorizarPago(Double saldoPagar) {
        return saldoDisponible > saldoPagar;
    }


}

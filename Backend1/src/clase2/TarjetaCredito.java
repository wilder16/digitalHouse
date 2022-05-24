package clase2;

import java.util.Date;

public class TarjetaCredito extends Tarjeta{

    private Integer limiteCupo;
    private Integer saldoUtilizado;

    public TarjetaCredito(Integer numeroDelFrente, Integer codigoSeguridad, Date fechaExpiracion, Integer limiteCupo) {
        super(numeroDelFrente, codigoSeguridad, fechaExpiracion);
        this.limiteCupo = limiteCupo;
    }

    @Override
    public Boolean autorizarPago(Double saldoPagar) {
        return limiteCupo  - saldoUtilizado > saldoPagar;
    }


}

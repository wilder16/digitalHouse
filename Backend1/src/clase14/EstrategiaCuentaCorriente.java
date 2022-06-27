package clase14;

public class EstrategiaCuentaCorriente implements IExtrategiaExtraccion{
    @Override
    public boolean extraer(Cuenta cuenta, Double monto) {
        cuenta.setSaldo(cuenta.getSaldo() - monto);
        return true;
    }
}

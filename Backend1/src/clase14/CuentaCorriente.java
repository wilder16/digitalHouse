package clase14;

public class CuentaCorriente extends Cuenta{

    @Override
    public boolean extraer(Double monto) {
        setSaldo(getSaldo() - monto);
        return true;
    }
}

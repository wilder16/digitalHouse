package clase14;

public class EstrategiaCuentaAhorro implements IExtrategiaExtraccion{
    @Override
    public boolean extraer(Cuenta cuenta, Double monto) {
        boolean resultado = false;
        if(cuenta.getSaldo() >= monto){
            cuenta.setSaldo(cuenta.getSaldo() - monto);
            resultado = true;
        }
        return resultado;
    }
}

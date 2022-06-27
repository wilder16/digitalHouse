package clase14;

public class CuentaAhorro extends Cuenta{

    @Override
    public boolean extraer(Double monto) {
        boolean resultado = false;
        if(getSaldo() >= monto){
            setSaldo(getSaldo() - monto);
            resultado = true;
        }
        return resultado;
    }
}

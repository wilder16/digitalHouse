package clase14;

public class Cuenta {
    private Integer numero;
    private Double saldo;
    private IExtrategiaExtraccion estrategia;

    public void setEstrategia(IExtrategiaExtraccion estrategia) {
        this.estrategia = estrategia;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }

    public boolean extraer(Double monto){
        return estrategia.extraer(this, monto);
    }

}

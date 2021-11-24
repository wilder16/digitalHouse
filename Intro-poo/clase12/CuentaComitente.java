package com.company.clase12;

public class CuentaComitente extends  Cuenta{

    private String clave;

    public CuentaComitente(Cliente titular, Double saldo, String clave) {
        super(titular, saldo);
        this.clave = clave;
    }

    public void depositar (Double monto){
        Double saldo = this.getSaldo();
        this.setSaldo((saldo+= monto) * 0.99);
    }

    @Override
    public void extraer(Double monto) {

    }
}

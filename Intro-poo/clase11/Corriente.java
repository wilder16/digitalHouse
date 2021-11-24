package com.company.clase11;

public class Corriente extends Cuenta{

    private Double descubierto;

    public Corriente(Double saldo, String cdu, Cliente cliente, Double descubierto) {
        super(saldo, cdu, cliente);
        this.descubierto = descubierto;
    }

    public Double getDescubierto(){
        return descubierto;
    }

    @Override
    public Boolean extraerEfectivo(Double monto, String cdu) {
        if(this.getCdu() == cdu && this.getSaldo() >= monto){
            this.setSaldo(this.getSaldo() - monto);
            return true;

        }else if( this.getCdu() == cdu && this.getSaldo() < monto){
            Double saldoAdicional = this.getSaldo() - monto;
            if(Math.abs(saldoAdicional) <= descubierto){
                this.setSaldo(0.0);
                descubierto -= Math.abs(saldoAdicional);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}

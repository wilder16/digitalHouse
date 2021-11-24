package com.company.clase11;

public abstract class Cuenta {

    private Double saldo;
    private String cdu;
    private Cliente cliente;


    public Cuenta(Double saldo, String cdu, Cliente cliente) {
        this.saldo = saldo;
        this.cdu = cdu;
        this.cliente = cliente;
    }

    public Double getSaldo(){
        return saldo;
    }

    public void setSaldo(Double saldo){
        this.saldo = saldo;
    }

    public String getCdu(){
        return cdu;
    }

    public Boolean depositar(Double monto, String cdu){

        if(this.cdu == cdu){
            this.saldo += monto;
            return true;
        }else {
            return false;
        }
    }

    public abstract Boolean extraerEfectivo(Double monto, String cdu);

    public Double informarSaldo(String cdu){

        if(this.cdu == cdu){

            return  this.saldo;
        }else {
            System.out.println("CDU incorrecto");
        }
        return null;
    }


}

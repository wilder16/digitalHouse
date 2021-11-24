package com.company.clase12;

public abstract class Cuenta {
    //Atributos
    private Cliente titular;
    private Double saldo;


    //CONSTRUCTOR
    public Cuenta(Cliente titular, Double saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public Double getSaldo(){
        return saldo;
    }

    //SETs y GETs
    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }


    //METODOS
    public void depositar (Double monto){
        saldo += monto;
    }

    //Sobrecargo el metodo depositar
    public void depositar (Double monto, String moneda){
        if (moneda.equals("dolar")){
            saldo += monto*200;
        }else{
            saldo += monto;
        }
    }



    public Double informarSaldo(){
        return saldo;
    }


    //Metodo abstracto, se debe implementar SI o SI en las sub-clases
    public abstract void extraer(Double monto);
}
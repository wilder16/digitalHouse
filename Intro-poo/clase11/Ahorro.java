package com.company.clase11;

public class Ahorro extends Cuenta{


    private Double tasaInteres;
    private Double intereses;

    public Ahorro(Double saldo, String cdu, Cliente cliente, Double tasaInteres) {
        super(saldo, cdu, cliente);
        this.tasaInteres = tasaInteres;
    }

    @Override
    public Boolean extraerEfectivo(Double monto, String cdu) {
        if(this.getCdu() == cdu && monto <= this.getSaldo()){
            this.setSaldo(this.getSaldo() - monto);
            return true;
        }else {
            return false;
        }
    }

    public Boolean cobrarInteres(String cdu, int meses){
        if(this.getCdu() == cdu){
            Double intereses = this.getSaldo() * (this.tasaInteres/100) * meses;
            this.setSaldo(this.getSaldo()+intereses);
            this.setSaldo(this.getSaldo()-intereses);
            System.out.println("Sus intereses son: " + intereses);
            return true;
        }else{
            return false;
        }
    }
}

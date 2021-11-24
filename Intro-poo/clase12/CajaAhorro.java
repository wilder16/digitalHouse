package com.company.clase12;

public class CajaAhorro extends Cuenta {
    //Atributos
    private Double tasaInteres;

    //CONSTRUCTOR
    public CajaAhorro(Cliente titular, Double saldo, Double tasaInteres) {
        super(titular, saldo);
        this.tasaInteres = tasaInteres;
    }

    //METODOS
    //Se sobreescribe el metodo de la superclase
    public void extraer(Double monto){
        System.out.println("#### EXTRAER de la clase: CajaAhorro");
        //Verifica que el saldo sea mayor o igual al monto a extraer
        if (informarSaldo() >= monto){
            System.out.println("El saldo es de: "+informarSaldo());
            //Actualiza el saldo, restando el monto extraido
            setSaldo(informarSaldo()-monto);
            System.out.println("Se extrajo: "+monto +" el saldo ahora es: "+informarSaldo());
        }else{
            System.out.println("No puede realizar la extracción, el monto supera el saldo.");
        }
    }

    public void cobrarIntereses(){
        setSaldo(informarSaldo()*tasaInteres);
    }

}

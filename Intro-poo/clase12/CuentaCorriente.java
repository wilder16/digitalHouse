package com.company.clase12;

public class CuentaCorriente extends Cuenta{
    //Atributos
    private Double montoDescubierto=0.0;


    //CONSTRUCTOR
    public CuentaCorriente(Cliente titular, Double saldo, Double montoDescubierto) {
        super(titular, saldo);
        this.montoDescubierto = montoDescubierto;
    }

    //SETs y GETs
    public Double getMontoDescubierto() {
        return montoDescubierto;
    }

    public void setMontoDescubierto(Double montoDescubierto) {
        this.montoDescubierto = montoDescubierto;
    }


    //METODOS
    //Se sobreescribe el metodo de la superclase
    public void extraer(Double monto){
        System.out.println("#### EXTRAER de la clase: CuentaCorriente");
        //Verifica que el saldo más el descubierto sea mayor o igual al monto a extraer
        if (informarSaldo()+montoDescubierto >= monto){
            System.out.println("El saldo es de: "+informarSaldo()+ " el descubierto es: "+montoDescubierto);
            //Actualiza el saldo, restando el monto extraido
            setSaldo(informarSaldo()-monto);
            System.out.println("Se extrajo: "+monto +" el saldo ahora es: "+informarSaldo());
        }else{
            System.out.println("No puede realizar la extracción, el monto supera el saldo más el descubierto.");
        }
    }

}


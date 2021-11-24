package com.company.clase12;

public class Main {

    public static void main(String[] args) {
        //Cuenta c = new Cuenta(); //que esto no se puede porque es abstracta
        //CajaAhorro ca = new CajaAhorro(); //mostrarles que se puede
        //CuentaCorriente cc = new CuentaCorriente(); // mostrarles que se puede

        //Creamos un cliente
        Cliente cliente= new Cliente(123, "Juan", "2222", "33333");
        //Creamos un objeto de la clase:
        Cuenta c = new CuentaCorriente(cliente,100.00,20.00);
        c.extraer(110.0);
        //c.depositar(60.00);
        c.depositar(60.00, "dolar");
        System.out.println(c.informarSaldo());

        //Ahora se apunta(SOBREESCRIBE) a un objeto de la clase: CajaAhorro
        c = new CajaAhorro(cliente, 100.00,1.05);
        c.setSaldo(100.0);
        c.extraer(110.0);
        //c se comporta diferente (polimorfismo) de acuerdo a que objeto apunta c


        //si queremos invocarle el método cobrarIntereses a la Cuenta c que sabemos que es una CajaAhorro debemos usar Casting
        //porque el metodo: cobrarIntereses() está en la sub-clase CajaAhorro
        //y si necesitamos antes saber de que tipo es c antes de hacer el casting por ejemplo, debemos usar intanceof
        //if (c instanceof CajaAhorro){
            //((CajaAhorro)c).cobrarIntereses();
        //}
        //System.out.println("Saldo CA: "+c.informarSaldo());
    }
}

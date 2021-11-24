package com.company.clase11.test;

import com.company.clase11.Ahorro;
import com.company.clase11.Cliente;
import com.company.clase11.Corriente;

public class Main {

    public static void main(String[] args){

        Cliente cliente1 = new Cliente("1","Wilder", "Bernal",1234, 12);

        Ahorro cuantaAhorro = new Ahorro(1000.0, "001",cliente1, 1.0);

        System.out.println(cuantaAhorro.getSaldo());
        System.out.println("Puede extraer de la cuenta de ahorros: " + cuantaAhorro.extraerEfectivo(100.0, cuantaAhorro.getCdu()));
        System.out.println("Saldo actual en cuenta de ahorro: " + cuantaAhorro.getSaldo());
        cuantaAhorro.cobrarInteres(cuantaAhorro.getCdu(), 10);
        System.out.println("Saldo actual en cuenta de ahorro: " + cuantaAhorro.getSaldo());
        System.out.println();
        Corriente cuentaCorriente = new Corriente(1000.0, "002",cliente1, 500.0);
        System.out.println("Puede extraer de la cuenta de corriente: " + cuentaCorriente.extraerEfectivo(500.0, cuentaCorriente.getCdu()));
        System.out.println("Saldo actual en cuenta corriente: " + cuentaCorriente.getSaldo());
        System.out.println("Puede extraer de la cuenta de corriente: " + cuentaCorriente.extraerEfectivo(1500.0, cuentaCorriente.getCdu()));
        System.out.println("Saldo actual en cuenta corriente: " + cuentaCorriente.getSaldo());
        System.out.println("Descubierto: " + cuentaCorriente.getDescubierto());
        System.out.println("Puede extraer de la cuenta de corriente: " + cuentaCorriente.extraerEfectivo(400.0, cuentaCorriente.getCdu()));
        System.out.println("Saldo actual en cuenta corriente: " + cuentaCorriente.getSaldo());
        System.out.println("Descubierto: " + cuentaCorriente.getDescubierto());



    }
}

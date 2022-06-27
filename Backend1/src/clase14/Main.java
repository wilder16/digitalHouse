package clase14;

public class Main {

    public static void main(String args[]){

        // vinculacion dinamica
        Cuenta cuenta = new CuentaAhorro();
        cuenta.setSaldo(1000.0);

        // polimorfismo
        cuenta.extraer(1100.0);

        // Para evitar hacer esto toca transformar la herencia en una composicion
        Cuenta cuenta2 = new CuentaCorriente();
        cuenta2.setSaldo(cuenta.getSaldo());
        cuenta2.extraer(1100.0);

        System.out.println(cuenta.getSaldo());
        System.out.println(cuenta2.getSaldo());

        /////////////////////////////////// mucho mas eficiente
        Cuenta cuenta3 = new Cuenta();
        cuenta3.setSaldo(2000.0);
        cuenta3.setNumero(1101);
        cuenta3.setEstrategia(new EstrategiaCuentaAhorro());
        cuenta3.extraer(2100.0);
        System.out.println(cuenta3.getSaldo());
        cuenta3.setEstrategia(new EstrategiaCuentaCorriente());
        cuenta3.extraer(2100.0);
        System.out.println(cuenta3.getSaldo());

    }

}

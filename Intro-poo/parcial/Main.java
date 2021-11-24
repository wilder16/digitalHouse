public class Main {

    public static void main(String[] args){

        Policia policia1 = new Policia("Wilder", "Bernal", "1234");

        Arma armaCorta = new ArmaCorta(policia1, 100,200, "Buena", 9,"EN USO", true);

        System.out.println("Se puede usar el arma corta " + armaCorta.sePuedeUsar());

        System.out.println("El arma corta se puede disparar a mas de 200 metros: " + ((ArmaCorta) armaCorta).sePuedeDisparar());

        Policia policia2 = new Policia("Wilson", "Bernal", "1478");

        Arma armaLarga = new ArmaLarga(policia2, 500, 1500, "Excelente", 10, "EN MANTENIMINTO",true, "Para cazar", 5);

        System.out.println("Se puede usar el arma larga " + armaLarga.sePuedeUsar());

        Policia policia3 = new Policia("Estella", "Lopez", "1598");

        Arma armaLarga2 = new ArmaLarga(policia2, 500, 1500, "Excelente", 10, "EN MANTENIMINTO",true, "Para cazar", 4);

        System.out.println("Se puede usar el arma larga " + armaLarga.sePuedeUsar());

        if(((ArmaLarga) armaLarga).compareTo(armaLarga2) == 0){
            System.out.println("Las armas tiene el mismo nive");
        }else if(((ArmaLarga) armaLarga).compareTo(armaLarga2) > 0 ){
            System.out.println("El arma larga 1 tiene mayor nivel");
        }else{
            System.out.println("El arma larga 2 tiene mayor nivel");
        }


    }

}

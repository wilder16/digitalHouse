package clase2s;

public class Main {

    public static void main(String args[]){
        Menu menuInfantil = new MenuInfantil(500.0, 5);
        System.out.println("EL precio del menu es: " + menuInfantil.calcularPrecioVenta());

        Menu menuVegetariano = new MenuVegetariano(600.0, 5, 3);

        System.out.println("EL precio del menu es: " + menuVegetariano.calcularPrecioVenta());

        Menu menuClasico = new MenuClasico(550.0);

        System.out.println("EL precio del menu es: " + menuClasico.calcularPrecioVenta());
    }




}

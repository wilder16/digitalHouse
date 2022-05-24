package clase4m.main;

import clase4m.model.Articulo;

public class Main {

    public static void main(String args[]){
        AnalistaDeCalidad analista = new AnalistaDeCalidad();
        String resultado = analista.ejecutar(new Articulo("PRIMERO",1100, 1210, "SANO"));
        System.out.println(resultado);

    }
}

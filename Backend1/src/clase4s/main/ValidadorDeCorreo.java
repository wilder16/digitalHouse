package clase4s.main;

import clase4s.chain.Manejador;
import clase4s.chain.ManejadorComercial;
import clase4s.chain.ManejadorGerencia;
import clase4s.chain.ManejadorSpam;

public class ValidadorDeCorreo {

    private Manejador inicial;

    public ValidadorDeCorreo(){
        this.inicial = new ManejadorGerencia();
        Manejador soporteIt = new ManejadorGerencia();
        Manejador comercial = new ManejadorComercial();
        Manejador spam = new ManejadorSpam();


    }
}

package clase7m.main;

import clase7m.flyweiht.ArbolFlyweihtFactory;
import clase7m.model.Arbol;

public class Main {

    public static void main(String args[]){
        ArbolFlyweihtFactory arbolFlyweihtFactory = new ArbolFlyweihtFactory();
        Arbol arbol1 = arbolFlyweihtFactory.getArbol("ORNAMENTALES", "ROJO");

        Arbol arbol2 = arbolFlyweihtFactory.getArbol("ORNAMENTALES", "VERDE");

        Arbol arbol3 = arbolFlyweihtFactory.getArbol("ORNAMENTALES", "CELESTE");

        Arbol arbol4 = arbolFlyweihtFactory.getArbol("ORNAMENTALES", "CELESTE");

    }
}

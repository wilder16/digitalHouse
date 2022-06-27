package clase7m.flyweiht;

import clase7m.model.Arbol;

import java.util.HashMap;
import java.util.Map;

public class ArbolFlyweihtFactory {

    private static Map<String, Arbol> arbolMap = new HashMap<>();

    public Arbol getArbol(String tipo, String color){
        String clave = "key: " + tipo + ":" + color;
        if(!arbolMap.containsKey(clave)){
            arbolMap.put(clave, new Arbol(tipo, color));
            System.out.println("Arbol creado");
            return arbolMap.get(clave);
        }
        System.out.println("Arbol obtenido");
        return arbolMap.get(clave);
    }
}

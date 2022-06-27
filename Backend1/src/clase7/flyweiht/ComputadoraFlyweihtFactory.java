package clase7.flyweiht;

import clase7.model.Computadora;

import java.util.HashMap;
import java.util.Map;

public class ComputadoraFlyweihtFactory {

    private static Map<String, Computadora> computadoraMap = new HashMap<>();

    public Computadora getComputadora(int ram, int disco){
        String clave = "key: " + ram + ":" + disco;
        if(!computadoraMap.containsKey(clave)){
            computadoraMap.put(clave, new Computadora(ram, disco));
            System.out.println("Computadora creada");
            return computadoraMap.get(clave);
        }
        System.out.println("Computadora obetenida");
        return computadoraMap.get(clave);
    }

}

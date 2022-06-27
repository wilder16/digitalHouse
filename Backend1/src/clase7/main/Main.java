package clase7.main;

import clase7.flyweiht.ComputadoraFlyweihtFactory;
import clase7.model.Computadora;

public class Main {

    public static void main(String args[]){

        ComputadoraFlyweihtFactory flyweihtFactory = new ComputadoraFlyweihtFactory();

        Computadora mac1 = flyweihtFactory.getComputadora(16, 500);

        Computadora mac2= flyweihtFactory.getComputadora(30, 500);

        Computadora window1= flyweihtFactory.getComputadora(16, 500);

    }
}

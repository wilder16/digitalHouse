package clase1s;

public class Cuadrado extends  FiguraGeometrica {

    private Double lado;

    public Cuadrado(Double lado) {
        this.lado = lado;
    }

    @Override
    public Double area(){
        if(lado == 0){
            System.out.println(MENSAJE);
            return null;
        }else{
            return area =  lado * lado;
        }
    }

}

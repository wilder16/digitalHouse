package clase1s;

public class Circulo extends FiguraGeometrica {

    private Double radio;

    public Circulo(Double radio) {
        this.radio = radio;
    }

    @Override
    public Double area(){
        if(radio == 0){
            System.out.println("El valor del radio o lado debe ser mayor que cero");
            return null;
        }else{
            return area = Math.PI * radio * radio;
        }
    }

}

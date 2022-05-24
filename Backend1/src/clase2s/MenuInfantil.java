package clase2s;

public class MenuInfantil extends Menu{

    private Integer numJuguete;

    public MenuInfantil(Double precioBase, Integer numJuguete) {
        super(precioBase);
        this.numJuguete = numJuguete;
    }

    public Integer getNumJuguete() {
        return numJuguete;
    }

    public void setNumJuguete(Integer numJuguete) {
        this.numJuguete = numJuguete;
    }

    @Override
    public Double calcularPrecioVenta() {return  numJuguete * 3 + getPrecioBase(); }

}

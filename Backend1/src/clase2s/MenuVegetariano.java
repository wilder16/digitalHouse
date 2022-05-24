package clase2s;

public class MenuVegetariano extends Menu{

    private Integer numEspecias;
    private Integer numSalsas;

    public MenuVegetariano(Double precioBase, Integer numEspecias, Integer numSalsas) {
        super(precioBase);
        this.numEspecias = numEspecias;
        this.numSalsas = numSalsas;
    }

    public Integer getNumEspecias() {
        return numEspecias;
    }

    public void setNumEspecias(Integer numEspecias) {
        this.numEspecias = numEspecias;
    }

    public Integer getNumSalsas() {
        return numSalsas;
    }

    public void setNumSalsas(Integer numSalsas) {
        this.numSalsas = numSalsas;
    }

    @Override
    public Double calcularPrecioVenta() {
        return getPrecioBase() + (getPrecioBase()*0.01)*numEspecias + numSalsas*2;
    }
}

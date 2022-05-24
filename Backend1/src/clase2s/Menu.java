package clase2s;

public abstract class Menu {

    private Double precioBase;

    public Menu(Double precioBase) {
        this.precioBase = precioBase;
    }

    public abstract Double calcularPrecioVenta();

    public Double getPrecioBase() {
        return precioBase;
    }

    public void setPrecioBase(Double precioBase) {
        this.precioBase = precioBase;
    }


}

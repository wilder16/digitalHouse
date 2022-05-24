package clase2s;

public class MenuClasico extends Menu{


    public MenuClasico(Double precioBase) {
        super(precioBase);
    }


    @Override
    public Double calcularPrecioVenta() {
        return getPrecioBase();
    }

}

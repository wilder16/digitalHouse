package clase8.facade;

import clase8.model.Producto;
import clase8.model.Tarjeta;

public interface IDescuentoFacade {

    int descuento(Tarjeta tarjeta, Producto producto, int cantidad);
}

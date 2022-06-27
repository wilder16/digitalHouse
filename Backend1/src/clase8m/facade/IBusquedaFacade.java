package clase8m.facade;

import clase8m.model.Hotel;
import clase8m.model.Vuelo;

public interface IBusquedaFacade {

    boolean buscarDispobible(Hotel hotel, Vuelo vuelo);
}

package clase8m.service;

import clase8m.model.Vuelo;

import java.time.LocalDate;

public class VueloService {

    public boolean busquedaVuelo(Vuelo vuelo, String destino, LocalDate fechaRegreso) {

        return vuelo.getDestino().equalsIgnoreCase(destino) && vuelo.getFechaRegreso().isEqual(fechaRegreso);
    }
}

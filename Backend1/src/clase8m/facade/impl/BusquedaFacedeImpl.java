package clase8m.facade.impl;

import clase8m.facade.IBusquedaFacade;
import clase8m.model.Hotel;
import clase8m.model.Vuelo;
import clase8m.service.HotelService;
import clase8m.service.VueloService;

import java.time.LocalDate;

public class BusquedaFacedeImpl implements IBusquedaFacade {

    private HotelService hotelService;
    private VueloService vueloService;

    private LocalDate fechaRegreso;
    private String ciudadDestino;


    public BusquedaFacedeImpl(LocalDate fechaRegreso, String ciudadDestino){
        hotelService = new HotelService();
        vueloService = new VueloService();
        this.fechaRegreso = fechaRegreso;
        this.ciudadDestino = ciudadDestino;
    }


    @Override
    public boolean buscarDispobible(Hotel hotel, Vuelo vuelo) {
     return hotelService.busqueHotel(hotel, ciudadDestino, fechaRegreso) &&
            vueloService.busquedaVuelo(vuelo, ciudadDestino, fechaRegreso);
    }
}

package clase8m.service;

import clase8m.model.Hotel;
import clase8m.model.Vuelo;

import java.time.LocalDate;

public class HotelService {

    public boolean busqueHotel(Hotel hotel, String ciudad, LocalDate fechaSalida){

        return hotel.getCuidad().equalsIgnoreCase(ciudad) && (hotel.getFechaSalida().isEqual(fechaSalida)
                || hotel.getFechaSalida().isBefore(fechaSalida));
    }
}

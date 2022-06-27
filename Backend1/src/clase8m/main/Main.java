package clase8m.main;

import clase8m.facade.IBusquedaFacade;
import clase8m.facade.impl.BusquedaFacedeImpl;
import clase8m.model.Hotel;
import clase8m.model.Vuelo;

import java.time.LocalDate;

public class Main {

    public static void main(String args[]){

        IBusquedaFacade busquedaFacade = new BusquedaFacedeImpl(LocalDate.of(2022, 06, 16 ), "Monteria");
        Hotel holte = new Hotel(LocalDate.of(2022,06,01),LocalDate.of(2022, 06, 16 ),"Monteria");
        Vuelo vuelo = new Vuelo(LocalDate.now(), LocalDate.of(2022, 06, 16 ), "Medellin", "Monteria");

        System.out.println(busquedaFacade.buscarDispobible(holte, vuelo));


    }
}

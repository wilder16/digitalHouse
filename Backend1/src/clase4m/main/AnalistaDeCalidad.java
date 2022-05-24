package clase4m.main;

import clase4m.chain.CompruebaCalidad;
import clase4m.chain.ControlEnvase;
import clase4m.chain.ControlLote;
import clase4m.chain.ControlPeso;
import clase4m.model.Articulo;

public class AnalistaDeCalidad {

    private CompruebaCalidad inical;

    public AnalistaDeCalidad() {
        this.inical = new ControlLote();
        CompruebaCalidad calidadPeso = new ControlPeso();
        CompruebaCalidad calidadEnvase = new ControlEnvase();

        inical.setSiguienteControl(calidadPeso);
        calidadPeso.setSiguienteControl(calidadEnvase);

    }
    public String ejecutar (Articulo articulo){
        return inical.validarCalidadDelProducto(articulo);
    }
}

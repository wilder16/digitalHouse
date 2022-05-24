package clase4m.chain;

import clase4m.model.Articulo;

public class ControlLote extends CompruebaCalidad {

    @Override
    public String validarCalidadDelProducto(Articulo articulo) {
        String mensaje = "";
        if (articulo.getLote() > 1000 && articulo.getLote() < 2000) {
            if (this.getSiguienteControl() != null) {
                this.getSiguienteControl().validarCalidadDelProducto(articulo);
            }
        } else {
            mensaje = "No paso el filtro de calidad de LOTE";
        }
        return mensaje;
    }
}

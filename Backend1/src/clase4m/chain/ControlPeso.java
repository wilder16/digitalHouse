package clase4m.chain;

import clase4m.model.Articulo;

public class ControlPeso extends CompruebaCalidad {

    @Override
    public String validarCalidadDelProducto(Articulo articulo) {
        String mensaje = "";
        if (articulo.getPeso() > 1200 && articulo.getPeso() < 1300) {
            if (this.getSiguienteControl() != null) {
                this.getSiguienteControl().validarCalidadDelProducto(articulo);
            }
        } else {
            mensaje = "No paso el filtro de calidad de PESO";
        }
        return mensaje;
    }
}

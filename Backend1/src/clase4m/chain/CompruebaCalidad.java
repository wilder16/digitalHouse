package clase4m.chain;

import clase4m.model.Articulo;

public abstract class CompruebaCalidad {

    private CompruebaCalidad siguienteControl;


    public CompruebaCalidad getSiguienteControl() {
        return siguienteControl;
    }

    public void setSiguienteControl(CompruebaCalidad siguienteControl) {
        this.siguienteControl = siguienteControl;
    }

    public abstract String validarCalidadDelProducto(Articulo articulo);
}

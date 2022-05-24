package clase4m.chain;

import clase4m.model.Articulo;

public class ControlEnvase extends CompruebaCalidad{

    public static final String SANO = "SANO";
    public static final String CASI_SANO = "CASI SANO";
    @Override
    public String validarCalidadDelProducto(Articulo articulo) {
        String mensaje = "";
        if(articulo.getEnvasado().equalsIgnoreCase(SANO) || articulo.getEnvasado().equalsIgnoreCase(CASI_SANO)){
            mensaje = "fue aceptado paso los tres filtros";
            if(this.getSiguienteControl() != null){
                this.getSiguienteControl().validarCalidadDelProducto(articulo);
            }
        }else {
            mensaje = "No paso el filtro de calidad de ENVASE";
        }
        return mensaje;
    }
}

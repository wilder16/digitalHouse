public abstract class  Arma {

    private Policia policia;
    private Integer cantidadNunicion;
    private Integer alcance;
    private String marca;
    private Integer calibre;
    private String estado;
    public static final String EN_USO = "EN USO";

    public Arma(Policia policia, Integer cantidadNunicion, Integer alcance, String marca, Integer calibre, String estado) {
        this.policia = policia;
        this.cantidadNunicion = cantidadNunicion;
        this.alcance = alcance;
        this.marca = marca;
        this.calibre = calibre;
        this.estado = estado;
    }

    public Integer getAlcance(){
        return alcance;
    }

    public Boolean sePuedeUsar(){

       return estado.equalsIgnoreCase(EN_USO)  && calibre >= 9;
    }
}

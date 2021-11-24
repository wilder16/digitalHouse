public class ArmaCorta extends Arma {

    private Boolean esAutomatica;

    public ArmaCorta(Policia policia, Integer cantidadNunicion, Integer alcance, String marca, Integer calibre, String estado, Boolean esAutomatica) {
        super(policia, cantidadNunicion, alcance, marca, calibre, estado);
        this.esAutomatica = esAutomatica;
    }

    public Boolean sePuedeDisparar(){
      return this.getAlcance() > 200;
    }
}

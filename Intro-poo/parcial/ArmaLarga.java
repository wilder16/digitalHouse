public class ArmaLarga extends Arma implements Comparable{

    private Boolean tieneSelloRennar;
    private String descripcion;
    private Integer nivel;

    public ArmaLarga(Policia policia, Integer cantidadNunicion, Integer alcance, String marca, Integer calibre, String estado, Boolean tieneSelloRennar, String descripcion, Integer nivel) {
        super(policia, cantidadNunicion, alcance, marca, calibre, estado);
        this.tieneSelloRennar = tieneSelloRennar;
        this.descripcion = descripcion;
        this.nivel = nivel;
    }

    public Integer getNivel(){
        return nivel;
    }


    @Override
    public int compareTo(Object o) {
        Integer estado=-1;
        if(this.nivel== ((ArmaLarga)o).getNivel()){
            //Los objetos son iguales
            estado=0;
        }else if(this.nivel>((ArmaLarga)o).getNivel()){
            //El objeto 1 es mayor que la pasada por parametro
            estado=1;
        }
        return estado;
    }
}

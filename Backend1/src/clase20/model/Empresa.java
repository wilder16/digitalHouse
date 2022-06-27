package clase20.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.StringJoiner;

public class Empresa implements Serializable {

    private Integer cuit ;
    private String razonSocial;
    private List<Empleado> empleadoList = new ArrayList<>();

    public Empresa(Integer cuit, String razonSocial, List<Empleado> empleadoList) {
        this.cuit = cuit;
        this.razonSocial = razonSocial;
        this.empleadoList = empleadoList;
    }

    public Integer getCuit() {
        return cuit;
    }

    public void setCuit(Integer cuit) {
        this.cuit = cuit;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public List<Empleado> getEmpleadoList() {
        return empleadoList;
    }

    public void setEmpleadoList(List<Empleado> empleadoList) {
        this.empleadoList = empleadoList;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", Empresa.class.getSimpleName() + "[", "]")
                .add("cuit=" + cuit)
                .add("razonSocial='" + razonSocial + "'")
                .add("empleadoList=" + empleadoList)
                .toString();
    }
}

package clase14two.dao.impl;

import clase14two.dao.IDao;
import clase14two.model.Estudiante;

import java.util.List;

public class EstudianteDaoEnMemoria implements IDao<Estudiante> {
    @Override
    public Estudiante guardar(Estudiante estudiante) {
        return null;
    }

    @Override
    public void eliminar(Long id) {

    }

    @Override
    public Estudiante buscar(Long id) {
        return null;
    }

    @Override
    public List<Estudiante> buscarTodos() {
        return null;
    }
}

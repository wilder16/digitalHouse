package clase14two.service;

import clase14two.dao.IDao;
import clase14two.model.Estudiante;

import java.util.List;

public class EstudianteService {
    private IDao<Estudiante> estudianteIDao;

    public IDao<Estudiante> getEstudianteIDao() {
        return estudianteIDao;
    }

    public void setEstudianteIDao(IDao<Estudiante> estudianteIDao) {
        this.estudianteIDao = estudianteIDao;
    }

    public Estudiante guardarEstudiante(Estudiante estudiante){
        // Delega la responsabilidar de guardar al DAO
        return estudianteIDao.guardar(estudiante);
    }

    public void eliminarEstudiante(Long id){
        // Delega la responsabilidar de eliminar al DAO
        estudianteIDao.eliminar(id);
    }

    public Estudiante buscarEstudiante(Long id){
        // Delega la responsabilidar de buscar al DAO
        return estudianteIDao.buscar(id);
    }

    public List<Estudiante> buscarTodos(){
        // Delega la responsabilidar de buscar a todos los estudiantes al DAO
        return estudianteIDao.buscarTodos();
    }

}

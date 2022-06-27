package clase14two;

import clase14two.dao.IDao;
import clase14two.dao.impl.EstudianteDaoH2;
import clase14two.model.Estudiante;
import clase14two.service.EstudianteService;

public class Main {
    public static void main(String args[]){

        Estudiante estudiante = new Estudiante(1, "Wilder", "Bernal");

        IDao<Estudiante> daoH2 = new EstudianteDaoH2();
        EstudianteService estudianteService = new EstudianteService();
        estudianteService.setEstudianteIDao(daoH2);

        estudianteService.guardarEstudiante(estudiante);

    }
}

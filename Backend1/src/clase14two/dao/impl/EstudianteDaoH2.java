package clase14two.dao.impl;

import clase14two.dao.IDao;
import clase14two.model.Estudiante;

import java.sql.*;
import java.util.List;

public class EstudianteDaoH2 implements IDao<Estudiante> {

    private final static String DB_JDBC_DRIVER = "org.h2.Driver";
    private final static String DB_URL = "jdbc:h2:~/db_estudiantes";
    private final static String DB_USER = "root";
    private final static String DB_PASSWORD = "";

    @Override
    public Estudiante guardar(Estudiante estudiante) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            // 1 Levantar el diver y conectarnos
            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // 2 Crear una sentencia
            preparedStatement = connection.prepareStatement("INSERT INTO estudiantes VALUES (?,?,?)");
            preparedStatement.setLong(1, estudiante.getId());
            preparedStatement.setString(2, estudiante.getNombre());
            preparedStatement.setString(3, estudiante.getApellido());

            // 3 Ejecutamos la sentencia
            preparedStatement.executeUpdate();
            preparedStatement.close();

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return estudiante;
    }

    @Override
    public void eliminar(Long id) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            // 1 Levantar el diver y conectarnos
            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // 2 Crear una sentencia
            preparedStatement = connection.prepareStatement("DELETE FROM estudiantes WHERE id=?)");
            preparedStatement.setLong(1,id);

            // 3 Ejecutamos la sentencia
            preparedStatement.executeUpdate();
            preparedStatement.close();

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public Estudiante buscar(Long id) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Estudiante estudiante = null;
        try {
            // 1 Levantar el diver y conectarnos
            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // 2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT * FROM estudiantes WHERE id=?");
            preparedStatement.setLong(1, id);

            // 3 Ejecutamos la sentencia
            ResultSet resultado = preparedStatement.executeQuery();

            // 4 evaluar los resultados
            while (resultado.next()){
                Long idEstudiante = resultado.getLong("id");
                String nombre = resultado.getString("nombre");
                String apellido = resultado.getString("apellido");
                estudiante = new Estudiante(idEstudiante, nombre, apellido);
            }
            preparedStatement.close();

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return estudiante;

    }

    @Override
    public List<Estudiante> buscarTodos() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        List<Estudiante> estudiantes = null;
        try {
            // 1 Levantar el diver y conectarnos
            Class.forName(DB_JDBC_DRIVER);
            connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

            // 2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT * FROM estudiantes");

            // 3 Ejecutamos la sentencia
            ResultSet resultado = preparedStatement.executeQuery();

            // 4 evaluar los resultados
            while (resultado.next()){
                Long idEstudiante = resultado.getLong("id");
                String nombre = resultado.getString("nombre");
                String apellido = resultado.getString("apellido");
                Estudiante estudiante = new Estudiante(idEstudiante, nombre, apellido);
                estudiantes.add(estudiante);
            }
            preparedStatement.close();

        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return estudiantes;
    }
}

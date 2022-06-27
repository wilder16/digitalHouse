package clase20.main;

import clase20.model.Empleado;
import clase20.model.Empresa;

import java.io.*;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        Empleado empl1 = new Empleado("Wilder", "Bernal", 1, 2000.0);
        Empleado empl2 = new Empleado("Jesus", "Lopez", 2, 2100.0);
        Empleado empl3 = new Empleado("Isai", "Gutierrez", 3, 2200.0);
        Empleado empl4 = new Empleado("Celeste", "Cochero", 4, 2300.0);

        List<Empleado> empleadoList = Arrays.asList(empl1, empl2,empl3,empl4);
        Empresa empresa = new Empresa(1234, "Soy la razon social de la empresa", empleadoList);

        FileOutputStream outputStream;
        try {
            outputStream = new FileOutputStream("empleado.txt");
            ObjectOutput objectOutput = new ObjectOutputStream(outputStream);
            objectOutput.writeObject(empresa);

        } catch (IOException e) {
            throw new RuntimeException(e);
        }

       Empresa empresa2;

        FileInputStream fileInputStream;
        try {
            fileInputStream = new FileInputStream("empleado.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
            empresa2 = (Empresa)objectInputStream.readObject();
        } catch (IOException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        System.out.println(empresa2);

    }
}

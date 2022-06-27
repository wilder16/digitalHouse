package clase19m.main;

import clase19m.model.Contacto;


import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Contacto> contactoList = new ArrayList<>();

        Contacto contacto1 = new Contacto("Jesus", "jesus.lopez@gmail.com", 3159283359l);
        Contacto contacto2 = new Contacto("Wilder", "wilder.bernal@gmail.com", 3167777856l);

        FileOutputStream outputStream;

        try {
            outputStream = new FileOutputStream("archivos-contactos.txt");
            ObjectOutput objectOutput = new ObjectOutputStream(outputStream);
            objectOutput.writeObject(contactoList);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        List<Contacto> contactoList2 = new ArrayList<>();
        FileInputStream fileInputStream;

        try {
            fileInputStream = new FileInputStream("archivos-contactos.txt");
            ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
            contactoList2 = (ArrayList)objectInputStream.readObject();
        } catch (IOException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for (Contacto contacto: contactoList2) {
            System.out.println("Nombre: " + contacto.getNombre() + " Mail: " + contacto.getMail() + " Telefono: " + contacto.getTelefono());
        }


    }
}

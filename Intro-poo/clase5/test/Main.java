package com.company.test;

import com.company.clase5.UsuarioJuego;

public class Main {

    public static void main(String[] args){

        UsuarioJuego usuario1 = new UsuarioJuego("Wilder", "1234");

        usuario1.aumentarPuntaje();
        usuario1.subirNivel();
        usuario1.bonus(8);

        System.out.println(usuario1.toString());
    }

}

package com.company.clase17;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Main {

    public static void main(String[] args) {
        try{
            Paciente paciente=new Paciente("Juan","Perez","12345", new GregorianCalendar(2021, Calendar.NOVEMBER, 24) );
            try {
                paciente.darAlta(new GregorianCalendar(2021, Calendar.OCTOBER, 02));
            }catch (PacienteException pe){
                System.err.println(pe);
            }
        }catch (PacienteException pe){
            System.err.println(pe);
        }


    }
}

package clase1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PersonaTest {

    Persona persona = new Persona("WILDER", "BERNAL");

    @Test
    void nombreCompleto() {

        assertEquals( persona.getApellido() + ", " + persona.getNombre() , persona.nombreCompleto());
    }

    @Test
    void esMayorDeEdad() {
        persona.setEdad("16/06/2000");

        assertTrue(persona.esMayorDeEdad());
    }

}
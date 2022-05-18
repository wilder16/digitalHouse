package clase1s;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CuadradoTest {

    @Test
    void area() {

        Cuadrado cuadrado = new Cuadrado(5.0);
        assertNotEquals(26, cuadrado.area());
    }
}
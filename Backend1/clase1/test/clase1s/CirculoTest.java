package clase1s;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CirculoTest {

    @Test
    void area() {

        Circulo circulo = new Circulo(10.0);

        assertEquals(314.1592653589793, circulo.area());
    }
}
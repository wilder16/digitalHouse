package clase7.model;

public class Computadora {

    private int ram;
    private int disco;

    private static int contador;

    public Computadora(int ram, int disco) {
        this.ram = ram;
        this.disco = disco;
        contador++;
        System.out.println("Contador: " + contador);
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getDisco() {
        return disco;
    }

    public void setDisco(int disco) {
        this.disco = disco;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Computadora{");
        sb.append("ram=").append(ram);
        sb.append(", disco=").append(disco);
        sb.append('}');
        return sb.toString();
    }


}

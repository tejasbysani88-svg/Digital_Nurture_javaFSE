public class Main {

    public static void main(String[] args) {

        Image image = new ProxyImage("nature.jpg");

        System.out.println("First Time");

        image.display();

        System.out.println();

        System.out.println("Second Time");

        image.display();

    }

}
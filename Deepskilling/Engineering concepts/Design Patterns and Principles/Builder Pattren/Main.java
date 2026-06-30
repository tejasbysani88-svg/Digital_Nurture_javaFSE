public class Main {

    public static void main(String[] args) {

        Computer computer = new Computer.Builder()
                .setCPU("Intel Core i7")
                .setRAM("16 GB")
                .setStorage("512 GB SSD")
                .setGraphicsCard("NVIDIA RTX 4060")
                .setOS("Windows 11")
                .build();

        System.out.println("Computer Configuration");
        computer.display();

    }

}
public class Main {

    public static void main(String[] args) {

        MessageService service = new EmailService();

        Customer customer = new Customer(service);

        customer.send();

    }

}
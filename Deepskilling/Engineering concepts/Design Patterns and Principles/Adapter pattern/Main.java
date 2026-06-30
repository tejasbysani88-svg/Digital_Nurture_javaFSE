public class Main {

    public static void main(String[] args) {

        PaymentProcessor paypal = new PayPalPayment();

        paypal.processPayment(5000);

        GooglePayGateway google = new GooglePayGateway();

        PaymentProcessor adapter = new GooglePayAdapter(google);

        adapter.processPayment(2500);

    }

}
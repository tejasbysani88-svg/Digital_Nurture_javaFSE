public class PayPalPayment implements PaymentProcessor {

    @Override
    public void processPayment(double amount) {

        System.out.println("Payment of ₹" + amount + " processed using PayPal.");

    }

}
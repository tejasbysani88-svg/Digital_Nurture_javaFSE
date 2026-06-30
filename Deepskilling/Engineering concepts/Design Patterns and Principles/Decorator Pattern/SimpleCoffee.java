public class SimpleCoffee implements Coffee {

    @Override
    public String getDescription() {
        return "Plain Coffee";
    }

    @Override
    public double getCost() {
        return 50;
    }
}
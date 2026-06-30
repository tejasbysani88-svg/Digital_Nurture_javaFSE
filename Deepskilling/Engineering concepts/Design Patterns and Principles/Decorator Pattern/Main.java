public class Main {

    public static void main(String[] args) {

        Coffee coffee = new SimpleCoffee();

        System.out.println(coffee.getDescription());
        System.out.println("Cost = ₹" + coffee.getCost());

        System.out.println();

        coffee = new MilkDecorator(coffee);

        coffee = new SugarDecorator(coffee);

        System.out.println(coffee.getDescription());

        System.out.println("Cost = ₹" + coffee.getCost());

    }

}
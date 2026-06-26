import java.util.Arrays;
import java.util.Comparator;

public class Main {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Accessories"),
            new Product(103, "Keyboard", "Accessories"),
            new Product(104, "Monitor", "Electronics"),
            new Product(105, "Printer", "Office")
        };

        // Linear Search
        System.out.println("===== Linear Search =====");

        Product result1 = LinearSearch.search(products, "Monitor");

        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Product not found.");
        }

        // Sort the array before Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        // Binary Search
        System.out.println("\n===== Binary Search =====");

        Product result2 = BinarySearch.search(products, "Monitor");

        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product not found.");
        }
    }
}
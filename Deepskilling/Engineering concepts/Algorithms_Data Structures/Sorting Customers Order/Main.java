public class Main {

    public static void main(String[] args) {

        Order[] orders = {

                new Order(101, "Rahul", 2500),
                new Order(102, "Priya", 1200),
                new Order(103, "Amit", 4500),
                new Order(104, "Sneha", 3000),
                new Order(105, "Kiran", 1800)

        };

        System.out.println("Original Orders");

        for (Order o : orders)
            o.display();

        BubbleSort.sort(orders);

        System.out.println("\nAfter Bubble Sort");

        for (Order o : orders)
            o.display();

        Order[] orders2 = {

                new Order(101, "Rahul", 2500),
                new Order(102, "Priya", 1200),
                new Order(103, "Amit", 4500),
                new Order(104, "Sneha", 3000),
                new Order(105, "Kiran", 1800)

        };

        QuickSort.quickSort(orders2, 0, orders2.length - 1);

        System.out.println("\nAfter Quick Sort");

        for (Order o : orders2)
            o.display();

    }

}
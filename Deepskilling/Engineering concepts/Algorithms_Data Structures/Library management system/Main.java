public class Main {

    public static void main(String[] args) {

        Library library = new Library();

        library.addBook(new Book(101, "Java", "James Gosling"));
        library.addBook(new Book(102, "Python", "Guido"));
        library.addBook(new Book(103, "C++", "Bjarne"));
        library.addBook(new Book(104, "DSA", "Mark Allen"));

        System.out.println("\nBooks in Library");

        library.displayBooks();

        System.out.println("\nSearching Book");

        library.searchBook(103);

        System.out.println("\nDeleting Book");

        library.deleteBook(102);

        System.out.println("\nBooks After Deletion");

        library.displayBooks();

    }

}
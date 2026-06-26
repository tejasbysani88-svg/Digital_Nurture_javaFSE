public class Library {

    Book head = null;

    // Add Book
    public void addBook(Book newBook) {

        if (head == null) {

            head = newBook;

        } else {

            Book temp = head;

            while (temp.next != null) {

                temp = temp.next;

            }

            temp.next = newBook;

        }

        System.out.println("Book Added Successfully.");

    }

    // Display Books
    public void displayBooks() {

        if (head == null) {

            System.out.println("Library is Empty.");
            return;

        }

        Book temp = head;

        while (temp != null) {

            temp.display();
            temp = temp.next;

        }

    }

    // Search Book
    public void searchBook(int id) {

        Book temp = head;

        while (temp != null) {

            if (temp.bookId == id) {

                System.out.println("Book Found");
                temp.display();
                return;

            }

            temp = temp.next;

        }

        System.out.println("Book Not Found.");

    }

    // Delete Book
    public void deleteBook(int id) {

        if (head == null) {

            System.out.println("Library is Empty.");
            return;

        }

        // Delete First Node
        if (head.bookId == id) {

            head = head.next;
            System.out.println("Book Deleted.");
            return;

        }

        Book temp = head;

        while (temp.next != null && temp.next.bookId != id) {

            temp = temp.next;

        }

        if (temp.next == null) {

            System.out.println("Book Not Found.");

        } else {

            temp.next = temp.next.next;

            System.out.println("Book Deleted.");

        }

    }

}
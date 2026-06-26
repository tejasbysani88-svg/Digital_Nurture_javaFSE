public class Book {

    int bookId;
    String title;
    String author;

    Book next;

    public Book(int bookId, String title, String author) {

        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.next = null;

    }

    public void display() {

        System.out.println(bookId + "\t" + title + "\t" + author);

    }

}
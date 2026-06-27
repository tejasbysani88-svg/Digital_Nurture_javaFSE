public class Main {

    public static void main(String[] args) {

        Document doc1 = DocumentFactory.getDocument("WORD");
        doc1.open();

        Document doc2 = DocumentFactory.getDocument("PDF");
        doc2.open();

        Document doc3 = DocumentFactory.getDocument("EXCEL");
        doc3.open();

    }

}
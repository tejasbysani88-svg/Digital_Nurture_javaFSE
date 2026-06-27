public class DocumentFactory {

    public static Document getDocument(String type) {

        if (type.equalsIgnoreCase("WORD")) {

            return new WordDocument();

        }

        else if (type.equalsIgnoreCase("PDF")) {

            return new PdfDocument();

        }

        else if (type.equalsIgnoreCase("EXCEL")) {

            return new ExcelDocument();

        }

        else {

            return null;

        }

    }

}
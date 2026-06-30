public class Main {

    public static void main(String[] args) {

        Student model = new Student("Tejas", 101);

        StudentView view = new StudentView();

        StudentController controller =
                new StudentController(model, view);

        System.out.println("Original Data");

        controller.updateView();

        System.out.println();

        controller.setStudentName("Rahul");

        controller.setStudentRollNo(102);

        System.out.println("Updated Data");

        controller.updateView();

    }

}
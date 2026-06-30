public class StudentController {

    private Student model;
    private StudentView view;

    public StudentController(Student model, StudentView view) {

        this.model = model;
        this.view = view;

    }

    public void setStudentName(String name) {

        model.setName(name);

    }

    public void setStudentRollNo(int rollNo) {

        model.setRollNo(rollNo);

    }

    public void updateView() {

        view.displayStudent(model.getName(), model.getRollNo());

    }

}
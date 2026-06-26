public class Main {

    public static void main(String[] args) {

        TaskManagement tm = new TaskManagement();

        tm.addTask(new Task(101, "Design UI", "Pending"));
        tm.addTask(new Task(102, "Write Code", "In Progress"));
        tm.addTask(new Task(103, "Testing", "Pending"));
        tm.addTask(new Task(104, "Deployment", "Completed"));

        System.out.println("\n===== Task List =====");

        tm.displayTasks();

        System.out.println("\n===== Search Task =====");

        tm.searchTask(103);

        System.out.println("\n===== Delete Task =====");

        tm.deleteTask(102);

        System.out.println("\n===== Updated Task List =====");

        tm.displayTasks();

    }
}
public class TaskManagement {

    Task head = null;

    // Add Task
    public void addTask(Task newTask) {

        if (head == null) {
            head = newTask;
        } else {

            Task temp = head;

            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = newTask;
        }

        System.out.println("Task Added Successfully.");
    }

    // Display Tasks
    public void displayTasks() {

        if (head == null) {
            System.out.println("No Tasks Available.");
            return;
        }

        Task temp = head;

        while (temp != null) {

            temp.display();
            temp = temp.next;

        }
    }

    // Search Task
    public void searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {

                System.out.println("Task Found");
                temp.display();
                return;

            }

            temp = temp.next;
        }

        System.out.println("Task Not Found.");
    }

    // Delete Task
    public void deleteTask(int id) {

        if (head == null) {

            System.out.println("Task List is Empty.");
            return;

        }

        // Delete First Task
        if (head.taskId == id) {

            head = head.next;
            System.out.println("Task Deleted Successfully.");
            return;

        }

        Task temp = head;

        while (temp.next != null && temp.next.taskId != id) {

            temp = temp.next;

        }

        if (temp.next == null) {

            System.out.println("Task Not Found.");

        } else {

            temp.next = temp.next.next;
            System.out.println("Task Deleted Successfully.");

        }
    }
}
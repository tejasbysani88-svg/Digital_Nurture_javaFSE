public class Task {

    int taskId;
    String taskName;
    String status;

    Task next;

    // Constructor
    public Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }

    // Display Task
    public void display() {
        System.out.println(taskId + "\t" + taskName + "\t" + status);
    }
}
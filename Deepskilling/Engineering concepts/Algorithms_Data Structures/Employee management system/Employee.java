public class Employee {

    int employeeId;
    String name;
    String position;
    double salary;

    // Constructor
    public Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    // Display Employee Details
    public void display() {
        System.out.println(employeeId + "\t" + name + "\t" + position + "\t" + salary);
    }
}
public class Main {

    public static void main(String[] args) {

        EmployeeManagement emp = new EmployeeManagement();

        emp.addEmployee(new Employee(101, "Rahul", "Manager", 50000));
        emp.addEmployee(new Employee(102, "Priya", "Developer", 45000));
        emp.addEmployee(new Employee(103, "Amit", "Tester", 40000));
        emp.addEmployee(new Employee(104, "Sneha", "HR", 35000));

        emp.displayEmployees();

        emp.searchEmployee(103);

        emp.deleteEmployee(102);

        emp.displayEmployees();

    }

}
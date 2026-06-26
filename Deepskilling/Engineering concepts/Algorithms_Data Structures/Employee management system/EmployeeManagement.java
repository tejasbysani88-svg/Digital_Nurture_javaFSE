public class EmployeeManagement {

    Employee[] employees = new Employee[10];
    int count = 0;

    // Add Employee
    public void addEmployee(Employee emp) {

        if (count < employees.length) {
            employees[count] = emp;
            count++;
            System.out.println("Employee Added Successfully.");
        } else {
            System.out.println("Employee Array is Full.");
        }
    }

    // Search Employee
    public void searchEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {

                System.out.println("\nEmployee Found");
                employees[i].display();
                return;

            }
        }

        System.out.println("Employee Not Found.");
    }

    // Display All Employees
    public void displayEmployees() {

        System.out.println("\nEmployee List");

        for (int i = 0; i < count; i++) {
            employees[i].display();
        }
    }

    // Delete Employee
    public void deleteEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {

                for (int j = i; j < count - 1; j++) {

                    employees[j] = employees[j + 1];

                }

                employees[count - 1] = null;
                count--;

                System.out.println("Employee Deleted Successfully.");
                return;
            }
        }

        System.out.println("Employee Not Found.");
    }
}
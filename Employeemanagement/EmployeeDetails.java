package Employeemanagement;

import java.util.ArrayList;
import java.util.List;

class Employee{
    private int id;
    private String name;
    private double salary;
    public Employee(int id,String name, double salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    public void displayDetails(){
        System.out.println("Employee Id:"+id);
        System.out.println("Employee Name:"+name);
        System.out.println("Employee Salary:"+salary);

    }
}
public class EmployeeDetails{
    public static void main(String[] args) {
        Employee emp1=new Employee(1, "Sharan", 35000);
        Employee emp2=new Employee(2, "Adhya", 45000);
        Employee emp3=new Employee(3, "Anmol", 60000);

        List<Employee> employees=new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        for(Employee emp:employees){
            emp.displayDetails();
            System.err.println("_______________________________");
        }


    }
}

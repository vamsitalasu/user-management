import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  searchQuery: string = '';
  filteredEmployees: Employee[] = [];
  employeeRole: string = 'Select';
  employeeRoles = [
    'Select',
    'Software Developer',
    'Senior Software Developer',
    'Quality Assurance',
    'Technical Lead',
    'Manager',
  ];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.filteredEmployees = employees;
    });
  }

  filter(event: any): void {
    if (event == 'Select') {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(
        (emp) =>
          emp.designation.toLowerCase() == this.employeeRole.toLowerCase()
      );
    }
  }

  search(): void {
    this.filteredEmployees = this.employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        emp.emailId.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        emp.designation.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }
}

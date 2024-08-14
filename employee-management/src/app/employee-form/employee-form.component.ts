import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = {
    name: '',
    id: '',
    companyName: '',
    emailId: '',
    contactNo: '',
    designation: 'Software Developer',
    avatar: 'image1.jpg',
  };
  mode: string = 'NEW';
  avatars = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual avatars

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(id).subscribe((employee) => {
        this.employee = employee;
        this.mode = 'EDIT';
      });
    }
  }

  save(): void {
    if (this.mode === 'EDIT') {
      this.employeeService
        .updateEmployee(this.employee)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.employeeService
        .addEmployee(this.employee)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}

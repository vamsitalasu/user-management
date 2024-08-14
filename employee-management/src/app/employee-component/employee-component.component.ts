import { Component, Input, input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrl: './employee-component.component.css',
})
export class EmployeeComponentComponent {
  @Input()
  employee!: Employee;
}

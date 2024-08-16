// src/app/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://yourapiurl.com/employees'; // URL
  private employeeDBMock: Employee[] = [
    //mock data
    {
      id: '1',
      name: 'Arjun',
      companyName: 'Infrrd',
      emailId: 'Arjun@infrrd.com',
      contactNo: '+919999999999',
      designation: 'Software Developer',
      avatar: 'image3.jpg',
    },
    {
      id: '2',
      name: 'Srujan',
      companyName: 'Infrrd',
      emailId: 'Srujan@infrrd.com',
      contactNo: '+919999999998',
      designation: 'Senior Software Developer',
      avatar: 'image2.jpg',
    },
    {
      id: '3',
      name: 'Murgan',
      companyName: 'Infrrd',
      emailId: 'Murgann@infrrd.com',
      contactNo: '+919999999997',
      designation: 'Quality Assurance',
      avatar: 'image3.jpg',
    },
    {
      id: '4',
      name: 'Ravi',
      companyName: 'Infrrd',
      emailId: 'Ravi@infrrd.com',
      contactNo: '+919999999959',
      designation: 'Software Developer',
      avatar: 'image3.jpg',
    },
    {
      id: '5',
      name: 'Brujan',
      companyName: 'Infrrd',
      emailId: 'brujan@infrrd.com',
      contactNo: '+919399999998',
      designation: 'Senior Software Developer',
      avatar: 'image3.jpg',
    },
    {
      id: '6',
      name: 'Murgan',
      companyName: 'Infrrd',
      emailId: 'Murgann@infrrd.com',
      contactNo: '+919999999997',
      designation: 'Quality Assurance',
      avatar: 'image2.jpg',
    },
    {
      id: '7',
      name: 'Arjun',
      companyName: 'Infrrd',
      emailId: 'Arjun@infrrd.com',
      contactNo: '+919999999999',
      designation: 'Software Developer',
      avatar: 'image1.jpg',
    },
    {
      id: '8',
      name: 'Srujan',
      companyName: 'Infrrd',
      emailId: 'Srujan@infrrd.com',
      contactNo: '+919999999998',
      designation: 'Senior Software Developer',
      avatar: 'image2.jpg',
    },
    {
      id: '9',
      name: 'Murgan',
      companyName: 'Infrrd',
      emailId: 'Murgann@infrrd.com',
      contactNo: '+919999999997',
      designation: 'Quality Assurance',
      avatar: 'image1.jpg',
    },
    {
      id: '10',
      name: 'Arjun',
      companyName: 'Infrrd',
      emailId: 'Arjun@infrrd.com',
      contactNo: '+919999999999',
      designation: 'Software Developer',
      avatar: 'image2.jpg',
    },
    {
      id: '12',
      name: 'Srujan',
      companyName: 'Infrrd',
      emailId: 'Srujan@infrrd.com',
      contactNo: '+919999999998',
      designation: 'Senior Software Developer',
      avatar: 'image1.jpg',
    },
    {
      id: '13',
      name: 'Murgan',
      companyName: 'Infrrd',
      emailId: 'Murgann@infrrd.com',
      contactNo: '+919999999997',
      designation: 'Quality Assurance',
      avatar: 'image3.jpg',
    },
    {
      id: '14',
      name: 'Arjun',
      companyName: 'Infrrd',
      emailId: 'Arjun@infrrd.com',
      contactNo: '+919999999999',
      designation: 'Software Developer',
      avatar: 'image3.jpg',
    },
    {
      id: '11',
      name: 'Srujan',
      companyName: 'Infrrd',
      emailId: 'Srujan@infrrd.com',
      contactNo: '+919999999998',
      designation: 'Senior Software Developer',
      avatar: 'image1.jpg',
    },
    {
      id: '15',
      name: 'Murgan',
      companyName: 'Infrrd',
      emailId: 'Murgann@infrrd.com',
      contactNo: '+919999999997',
      designation: 'Quality Assurance',
      avatar: 'image1.jpg',
    },
  ];

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    // return this.http.get<Employee[]>(this.apiUrl); when we have proper backend we can use like this to all employees
    return of(this.employeeDBMock);
  }

  getEmployee(id: string): Observable<Employee> {
    // return this.http.get<Employee>(`${this.apiUrl}/${id}`); when we have proper backend we can use like this to get details of one employee searched for
    let employee = this.employeeDBMock.filter((emp) => {
      return emp.id == id;
    });
    return of(employee[0]);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    // return this.http.post<Employee>(this.apiUrl, employee);

    this.employeeDBMock.push(employee);
    return of(employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    // return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
    this.employeeDBMock.map((emp) => {
      if (emp.id === employee.id) {
        emp.companyName = employee.companyName;
        emp.contactNo = employee.contactNo;
        emp.designation = employee.designation;
        emp.emailId = employee.emailId;
        emp.name = employee.name;
      }
    });
    return of(employee);
  }

  deleteEmployee(id: string): Observable<string> {
    // return this.http.delete<void>(`${this.apiUrl}/${id}`);
    this.employeeDBMock = this.employeeDBMock.filter((emp) => {
      return !(emp.id == id);
    });
    return of('deleted');
  }
}

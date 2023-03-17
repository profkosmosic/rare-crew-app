import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/i-employee';
import { IEmployeeRecord } from '../../interfaces/i-employee-record';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeRecordList:IEmployeeRecord[] = [];
  employeeList:IEmployee[] = [];

  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  private getEmployeeData(): void {
    this.employeeService.get().subscribe(employeeRecords => {
      this.employeeRecordList = employeeRecords;
      this.employeeList = this.getEmployees(this.employeeRecordList);
      this.setEmployeeTime();
      this.sortEmployees();
    });
  }

  private getEmployees(record:IEmployeeRecord[]): IEmployee[] {
    let employees : IEmployee[] = [];
    for(let i = 0; i < record.length; i++) {
      if(employees.find(e => e.EmployeeName === record[i].EmployeeName) === undefined && record[i].EmployeeName) {
        let employee:IEmployee = {
          EmployeeName: record[i].EmployeeName,
          TotalTime: 0
        };
        employees.push(employee);
      }
    }
    return employees;
  }

  private setEmployeeTime() {
    for(let i = 0; i < this.employeeList.length; i++) {
      this.calculateTotalTime(this.employeeList[i], i);
    }
  }

  private calculateTotalTime(employee:IEmployee, index:number) {
    for(let i = 0; i < this.employeeRecordList.length; i++) {
      if(this.employeeRecordList[i].EmployeeName === employee.EmployeeName) {
        this.employeeList[index].TotalTime += Math.abs(new Date(this.employeeRecordList[i].EndTimeUtc).getHours() - new Date(this.employeeRecordList[i].StarTimeUtc).getHours());
      }
    }
  }

  private sortEmployees() {
    this.employeeList.sort(function(a,b) {
      return b.TotalTime - a.TotalTime;
    })
  }
}
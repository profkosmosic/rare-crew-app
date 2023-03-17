import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/i-employee';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-employee-chart',
  templateUrl: './employee-chart.component.html',
  styleUrls: ['./employee-chart.component.css']
})
export class EmployeeChartComponent implements OnInit {
  @Input() employees:IEmployee[] = [];

  ngOnInit(): void {
    this.createChart();
  }

  getEmployeeNames(): string[] {
    let employeeNames: string[] = [];
    for(let i = 0; i < this.employees.length; i++) {
      employeeNames.push(this.employees[i].EmployeeName);
    }
    return employeeNames;
  }

  getEmployeeTime(): number[] {
    let employeeTime: number[] = [];
    for(let i = 0; i < this.employees.length; i++) {
      employeeTime.push(this.employees[i].TotalTime);
    }
    return employeeTime;
  }

  calculatePercentage(): number[] {
    let employeeTime: number[] = this.getEmployeeTime();
    let employeePercentage: number[] = [];
    let sum = 0;
    for(let i = 0; i < employeeTime.length; i++) {
      sum += employeeTime[i];
    }
    for(let i = 0; i < employeeTime.length; i++) {
      employeePercentage.push(Math.round(employeeTime[i] / sum * 100));
    }
    return employeePercentage;
  }

  createChart() {
    new Chart("myChart", {
      type: "pie",
      data: {
        labels: this.getEmployeeNames(),
        datasets: [{
          label: "Total Hour %",
          data: this.calculatePercentage()
        }]
      }
    });
  }
}

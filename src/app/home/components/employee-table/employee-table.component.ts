import { Component, Input } from '@angular/core';
import { IEmployee } from '../../interfaces/i-employee';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  @Input() employees:IEmployee[] = [];
}

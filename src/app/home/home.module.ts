import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeeChartComponent } from './components/employee-chart/employee-chart.component';



@NgModule({
  declarations: [
    HomeComponent,
    EmployeeTableComponent,
    EmployeeChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }

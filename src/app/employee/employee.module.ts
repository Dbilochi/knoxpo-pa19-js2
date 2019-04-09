import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeOperateComponent } from './employee-operate/employee-operate.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './employee.service'
@NgModule({
  declarations: [DashboardComponent, EmployeeOperateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }

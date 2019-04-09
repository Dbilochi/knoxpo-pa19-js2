import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './employee/dashboard/dashboard.component'
import {EmployeeOperateComponent} from './employee/employee-operate/employee-operate.component'
import {AuthGuard} from './_guards/auth.guard'
import {OperateGuard} from './_guards/operate.guard'

const routes: Routes = [
  {
    path: '',component: LoginComponent
  },
  {
    path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard]
  },
  {
    path: 'add',component: EmployeeOperateComponent,canActivate: [OperateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

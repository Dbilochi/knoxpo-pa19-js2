import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EmployeeModule} from './employee/employee.module'
import {AuthGuard} from './_guards/auth.guard'
import {OperateGuard} from './_guards/operate.guard'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EmployeeModule,
  ],
  providers: [AuthGuard,OperateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

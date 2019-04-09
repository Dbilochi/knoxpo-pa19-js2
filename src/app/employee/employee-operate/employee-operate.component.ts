import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl,NG_VALIDATORS,ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service'

import * as moment from 'moment';
@Component({
  selector: 'app-employee-operate',
  templateUrl: './employee-operate.component.html',
  styleUrls: ['./employee-operate.component.css']
})
export class EmployeeOperateComponent implements OnInit {
  private employees;
  public newEmployee;
  public show:boolean=false;
  public employeeForm: FormGroup = this.fb.group({
      'first_name': ['', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]],
      'last_name': ['', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]],
      'email': ['', [Validators.required,Validators.email]],
      'phone_number': ['',[
      Validators.pattern('^[0-9]+$'),
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ]],
      'dob': ['',[Validators.required]],
  });
  constructor(public fb:FormBuilder,public router: Router,private employeeService: EmployeeService) {
   }

  ngOnInit() {
  }

  addEmployee(newEmployee){
    this.employeeService.add(newEmployee).then(() => {
      return this.getEmployee();
    }).then(() => {
      this.newEmployee = ''; // clear input form value
    });
  }

  getEmployee(){
    return this.employeeService.get().then(employees => {
      this.employees = employees;
      this.show = true;
    });
  }

  add(type){
    if(type == 'add'){
      this.router.navigate(['/add']);
    }
    else if(type == 'root'){
      this.router.navigate(['/dashboard']);
    }
  }

  submitForm(form:any){
    console.log('form--',form.valid);
    this.employeeForm.controls['first_name'].markAsTouched()
    this.employeeForm.controls['last_name'].markAsTouched()
    this.employeeForm.controls['email'].markAsTouched()
    this.employeeForm.controls['phone_number'].markAsTouched()
    this.employeeForm.controls['dob'].markAsTouched()
    if(form.valid){
      this.newEmployee={
        first_name : form.value.first_name,
        last_name: form.value.last_name,
        email: form.value.email,
        phone_number: form.value.phone_number,
        dob: form.value.dob
      }
      this.addEmployee(this.newEmployee)
    }
  }

  updateEmployee(employee, newValue,field) {
    if (field == 'first_name'){
    employee.first_name = newValue;
    }
    else if(field == 'last_name'){
    employee.last_name = newValue;
    }
    else if(field == 'email'){
    employee.email = newValue;
    }
    else if(field == 'phone_number'){
    employee.phone_number = newValue;
    }
    return this.employeeService.put(employee).then(() => {
      employee.editing = false;
      return this.getEmployee();
    });
  }

  destroyEmployee(employee) {
    if(confirm("Are you sure to delete?")) {
      this.employeeService.delete(employee).then(() => {
        return this.getEmployee();
      });
    }
  }

}

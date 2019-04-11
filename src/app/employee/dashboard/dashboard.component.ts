import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from '../employee.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public todos;
  public activeTasks;
  constructor(public router: Router,private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(){
    return this.employeeService.get().then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    });
  }

  logout(){
    localStorage.setItem('user_type',null)
    this.router.navigate(['/']);
  }

  add(type){
    if(type == 'add'){
      this.router.navigate(['/add']);
    }
    else if(type == 'root'){
      this.router.navigate(['/dashboard']);
    }
  }

}

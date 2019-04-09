import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public normal_user:string = 'abc'
  public admin_user:string = 'admin'
  public password = '12345678'
  constructor(public fb:FormBuilder,public router: Router) { }
  public loginForm: FormGroup = this.fb.group({
      'username' : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
      'password': ['', Validators.minLength(5)],
  });
  ngOnInit() {
  }

  submitForm(form:any){
    if (form.username == 'abc' && form.password == this.password){
      localStorage.setItem('user_type','normal')
      this.router.navigate(['/dashboard']);
    }
    else if(form.username == 'admin' && form.password == this.password){
      localStorage.setItem('user_type','admin')
      this.router.navigate(['/dashboard']);
    }
    else{
      alert('Wrong Credentials');
    }
  }

}

import { Injectable } from '@angular/core';
const EMPLOYEES = [
  { first_name: 'Deeksha',last_name: 'bilochi', email: 'dbi@test.com',phone_number: '9958746214',dob:'18 dec' },
  { first_name: 'Rakesh',last_name: 'Patel', email: 'rk@test.com' ,phone_number: '8858746214',dob:'13 dec'},
  { first_name: 'Mukesh',last_name: 'kumar', email: 'mk@test.com',phone_number: '3358746214',dob:'15 dec' },
  { first_name: 'Vinay',last_name: 'Patel', email: 'vp@test.com',phone_number: '2258746214',dob:'16 dec' },
];
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  get() {
    return new Promise(resolve => resolve(EMPLOYEES));
  }

  add(data) {
      console.log('service called----',data)
    return new Promise(resolve => {
      EMPLOYEES.push(data);
      resolve(data);
    });
  }

  put(changed) {
    console.log('changed----',changed);
    return new Promise(resolve => {
      const index = EMPLOYEES.findIndex(todo => todo === changed);
      EMPLOYEES[index].first_name = changed.first_name;
      resolve(changed);
    });
  }

  delete(selected) {
    console.log('selected---',selected);
    return new Promise(resolve => {
      const index = EMPLOYEES.findIndex(todo => todo === selected);
      EMPLOYEES.splice(index, 1);
      resolve(true);
    });
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOperateComponent } from './employee-operate.component';

describe('EmployeeOperateComponent', () => {
  let component: EmployeeOperateComponent;
  let fixture: ComponentFixture<EmployeeOperateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOperateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOperateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

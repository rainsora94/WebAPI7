import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import {EmployeeComponent} from './employee/employee.component';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service:EmployeeService,public router:Router ) { }

  ngOnInit() {
  }
  redirect(){    
    this.router.navigate([ '/app-employees/employee/employee.component.html' ])
 }
}

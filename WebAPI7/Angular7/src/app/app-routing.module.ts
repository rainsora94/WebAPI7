import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesComponent } from './employees/employees.component';

import {DepartmentListComponent} from './department-list/department-list.component';
import {DepartmentContactComponent} from './department-contact/department-contact.component';
import {DepartmentOverviewComponent} from './department-overview/department-overview.component';
import {DepartmentDetailComponentComponent} from './department-detail-component/department-detail-component.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'Employees',component :EmployeesComponent },
  { path: 'Employee',component :EmployeeComponent },
  { path: 'Employee',   component: EmployeeListComponent }, 
  { path: 'employees/employee', component: EmployeeComponent,},

  //copy
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  { 
    path: 'departments/:id', 
    component: DepartmentDetailComponentComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent},
      { path: 'contact', component: DepartmentContactComponent}
    ]
   },
  { path: 'employees',   component: EmployeeListComponent,
children:[
  {path:'employee',component:EmployeeComponent}
]
},
{ path: '',         redirectTo: '/employees',pathMatch: 'full' },
{ path: 'employees',redirectTo: 'employee',  pathMatch: 'full' },
{ path: 'employee',redirectTo: 'employee/:id' },
// { path: 'employee',     redirectTo: '/employee.ID',pathMatch: 'full' },
  // { path: '**',   component: PageNotFoundComponent }
  { path: '**',   component: PageNotFoundComponent }
  //copy
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  EmployeeListComponent,
                                  EmployeeComponent,
                                  EmployeesComponent
                                 ]
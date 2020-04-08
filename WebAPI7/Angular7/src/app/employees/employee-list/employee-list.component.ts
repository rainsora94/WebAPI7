import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeID: any;
  employeeData: any;
  employeeForm: NgForm;
  public selectedId;
  employee = [
    {"id": this.employeeID}
    
  ]
  constructor(
    public service: EmployeeService,
    private toastr: ToastrService,
    public router:Router,
    
    ) { }

    btnClick= function () {
      this.router.navigateByUrl('/user');
     
};
// onSelect(department) {
//   //this.router.navigate(['/departments', department.id]);
//    this.router.navigate([department.id], { relativeTo: this.route });
// }

isSelected(department) { return department.id === this.selectedId; }
  ngOnInit() {
   this.service.refreshList();
  
  }
  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     EmployeeID: null,
  //     FullName: '',
  //     Position: '',
  //     EMPCode: '',
  //     Mobile: ''
  //   }
  // }
  onDetail(id: number) {
    if (confirm('View this record?'))
    this.service.detailEmployee(id);
   }
  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }
  //  goToPage(pageName:string){
  //   this.router.navigate([`${Employee}`]);
  // }
  goToPage(pageName:string){
    this.router.navigate(['./employees/employee']);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEmployee(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
  }
  // onDetail(id: number) {
  //   if (confirm('View employee info')) {
  //     this.service.get(id).subscribe(res => {
  //       this.service.refreshList();
  //       this.toastr.warning('Deleted successfully', 'EMP. Register');
  //     });
  //   }
  // }
  onUpdate(form:NgForm) {
    if (confirm('Are you sure to update this record?')) {
      this.service.postEmployee(form.value).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Update successfully', 'EMP. Register');
      });
    }
  }

  //update by ID 
  // onUpdateEmp(id:number) {
  //   if (confirm('Are you sure to update this record?')) {
  //     this.service.postEmployee(id.Employee).subscribe(res => {
  //       this.service.refreshList();
  //       this.toastr.warning('Update successfully', 'EMP. Register');
  //     });
  //   }
  // }

  loadEmployeeDetails(employeeID){
    this.service.getEmployee(employeeID).subscribe(product => {
    this.employeeData = product;
    // this.employeeForm.controls['EmployeeID'].setValue(this.employeeData['e_name']);
    this.employeeForm.controls['FullName'].setValue(this.employeeData['e_FullName']);
    this.employeeForm.controls['EMPCode'].setValue(this.employeeData['e_EMPCode']);
    this.employeeForm.controls['Mobile'].setValue(this.employeeData['e_Mobile']);
    this.employeeForm.controls['Position'].setValue(this.employeeData['e_Position']);  
  });
    }

  // updateRecord(form: NgForm) {
  //   this.service.putEmployee(form.value).subscribe(res => {
  //     this.toastr.info('Updated successfully', 'EMP. Register');
  //     this.resetForm(form);
  //     this.service.refreshList();
  //   });

  //   }

}

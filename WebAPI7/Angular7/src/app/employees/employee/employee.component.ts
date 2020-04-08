import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public formDetail: NgForm;
  constructor(public service: EmployeeService,private  toast:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: ''
    }    
  }

  currentForm(form?: NgForm) {
         
    this.formDetail.value.employeeDetail
  }

  onSubmit(form: NgForm) {
     if (form.value.EmployeeID == null)
      this.insertRecord(form);
   else 
   this.updateRecord(form);
    }
    
    insertRecord(form: NgForm) {
      console.log(form)
    this.service.postEmployee(form.value).subscribe(res => {
      this.toast.success('Insert data success','EMP.Register');
      this.resetForm(form);
      this.service.refreshList();
     

    });
  }
  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toast.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

    }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { employeeModel } from "../../Models/employeeModel";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  emp: employeeModel = { employeeID: '', employeeName: '', employeeSalary: 0, employeeGender: '', employeeBirthDate: null };
  //emp: employeeModel;
  updateForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private emprecordService: EmployeeService, private route: ActivatedRoute) { }
  get f() { return this.updateForm.controls; }

  ngOnInit() {

    this.updateForm = this.formBuilder.group({
      //deptid: ['', Validators.required],

      employeeName: ['', Validators.required],
      employeeSalary: ['', [Validators.required, Validators.maxLength(5)]],
      employeeGender: ['', Validators.required],
      employeeBirthDate: ['', Validators.required],


    });
    this.getUser();
  }
  getUser() {
    const id = this.route.snapshot.params.id;
    this.emprecordService.GetEmployeeById(id).subscribe(
      data => this.emp = data
    );
  }

  EditMyEmp(myUpdatedData) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    //////
    const id = this.route.snapshot.params.id;
    this.emprecordService.GetEmployeeById(id).subscribe(
      data => {
        this.emp = data;
        this.emprecordService.UpdatEmployee(id, myUpdatedData).subscribe();

      }

    );

    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
    this.router.navigate(['all']);
  }

}

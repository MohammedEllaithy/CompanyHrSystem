import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl ,FormBuilder , Validators } from '@angular/forms';
import { EmployeeService } from "../../services/employee.service";
import { employeeModel } from "../../Models/employeeModel";
import { Observable } from "rxjs";
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  massage: string;  
  dataSaved = false;  
  registerForm: FormGroup;
  submitted = false; 
  EmployeeIdUpdate = "0"; 
  constructor(private formBuilder: FormBuilder ,private router: Router,private empService:EmployeeService) { }

 
  
  // ngOnInit() {

  //   this.registerForm = this.formBuilder.group({
  //     //deptid: ['', Validators.required],

  //     EmployeeName: ['', Validators.required],
  //     EmployeeSalary: ['', [Validators.required, Validators.maxLength(5)]],
  //     employeeGender: ['', Validators.required],
  //     EmployeeBirthDate:['', Validators.required],
      
     
  // });

  // let Id = localStorage.getItem("id");  
  // if(Id!=null)  
  // {  
  //   this.EmployeeEdit(Id) ;  
  //  }} 
  // }

      // convenience getter for easy access to form fields
      get f() { return this.registerForm.controls; }

      onSubmit(values) {
          this.submitted = true;
         
          // stop here if form is invalid
          if (this.registerForm.invalid) {
              return;
          }
  
          // display form values on success
          this.empService.InsertEmployee(values);
          this.router.navigate(['/all'])
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      }
  
      onReset() {
          this.submitted = false;
          this.registerForm.reset();
      }


      ngOnInit() {

        this.registerForm = this.formBuilder.group({
          //deptid: ['', Validators.required],
    
          employeeName: ['', Validators.required],
          employeeSalary: ['', [Validators.required, Validators.maxLength(5)]],
          employeeGender: ['', Validators.required],
          employeeBirthDate:['', Validators.required],
          
         
      });
    
      // let Id = localStorage.getItem("id");  
      // if(Id!=null)  
      // {  
      //   this.EmployeeEdit(Id) ;  
      //  }} 
      }
    }
 




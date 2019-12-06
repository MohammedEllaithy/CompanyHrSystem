import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { employeeModel } from "../../Models/employeeModel";
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  emp: employeeModel[] = [];


  massage: String;
  dataSaved = false;
  constructor(private router: Router, private emprecordService: EmployeeService) { this.Loademployee() }

  Loademployee() {
    // debugger;  

    this.emprecordService.GetAllEmployees().subscribe(
      data => this.emp = data
    );

  }

 
  Deleteemployee(id: string) {
    if (confirm("Are You Sure To Delete this Informations")) {
      this.emprecordService.DeleteEmployee(id).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = "Deleted Successfully";
          this.Loademployee();
        }
      );
    }
  }
  ngOnInit() {
    //localStorage.clear();
    this.Loademployee();
    // console.log(this.Loademployee())
  }

}

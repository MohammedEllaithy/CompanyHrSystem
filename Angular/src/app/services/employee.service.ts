import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { employeeModel } from "../Models/employeeModel";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  Url = "https://localhost:44336/api";

  constructor(private http: HttpClient) { }

  InsertEmployee(employee: employeeModel) {
    // debugger;  

    return this.http.post(this.Url + '/employees', employee).subscribe();

  }


  GetAllEmployees() {
    //debugger;  
    return this.http.get<employeeModel[]>(this.Url + "/employees");



  }

  DeleteEmployee(id: string) {

    return this.http.delete(this.Url + '/employees/' + id);

  }
  // DeleteEmployee(id:string):Observable<number>  
  // {  
  //   //debugger;  
  //  return this.http.get<number>(this.Url + '/Delete/?id='+id);  
  // }  
  GetEmployeeById(id: string) {

    return this.http.get<employeeModel>(this.Url + '/employees/' + id);
  }


  UpdatEmployee(id: string, emp: any) {
    return this.http.patch(this.Url + '/Employees/' + id, emp);
  }




}

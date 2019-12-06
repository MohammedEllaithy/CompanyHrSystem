import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddEmployeeComponent} from './Employees/add-employee/add-employee.component';
import{EditEmployeeComponent} from './Employees/edit-employee/edit-employee.component';

import{AllComponent} from './Employees/all/all.component';




const routes: Routes = [
  {path:'' , component:AddEmployeeComponent},
  {path: 'all/Edit/:id', component: EditEmployeeComponent},
  {path:'all' , component:AllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

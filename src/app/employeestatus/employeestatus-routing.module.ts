import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeestatusComponent } from './employeestatus.component';


const routes: Routes = [
  {path: "", component : EmployeestatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeestatusRoutingModule { }

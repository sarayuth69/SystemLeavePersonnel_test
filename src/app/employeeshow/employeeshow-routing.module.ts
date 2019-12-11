import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeshowComponent } from './employeeshow.component';


const routes: Routes = [
  {path:"", component: EmployeeshowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeshowRoutingModule { }

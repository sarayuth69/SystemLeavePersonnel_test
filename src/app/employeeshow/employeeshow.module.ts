import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeshowRoutingModule } from './employeeshow-routing.module';
import { EmployeeshowComponent } from './employeeshow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeeshowComponent],
  imports: [
    CommonModule,
    EmployeeshowRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeshowModule { }

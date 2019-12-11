import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeestatusRoutingModule } from './employeestatus-routing.module';
import { EmployeestatusComponent } from './employeestatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeestatusComponent],
  imports: [
    CommonModule,
    EmployeestatusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeestatusModule { }

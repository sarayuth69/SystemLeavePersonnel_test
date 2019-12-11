import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavelistRoutingModule } from './leavelist-routing.module';
import { LeavelistComponent } from '../leavelist/leavelist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeavelistComponent],
  imports: [
    CommonModule,
    LeavelistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LeavelistModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavetypeRoutingModule } from './leavetype-routing.module';
import { LeavetypeComponent } from './leavetype.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LeavetypeComponent],
  imports: [
    CommonModule,
    LeavetypeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LeavetypeModule { }

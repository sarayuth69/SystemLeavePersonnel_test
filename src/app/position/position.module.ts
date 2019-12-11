import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PositionModule { }

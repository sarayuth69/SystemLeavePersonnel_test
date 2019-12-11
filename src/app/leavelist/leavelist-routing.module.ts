import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeavelistComponent } from './leavelist.component';


const routes: Routes = [
  {path: "", component : LeavelistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavelistRoutingModule { }

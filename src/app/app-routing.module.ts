import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  { path: "login", loadChildren: "./login/login.module#LoginModule" },
  // { path: "ltypeoffcal", loadChildren: "./ltypeoffcal/ltypeoffcal.module#LtypeoffcalModule" },
  // { path: "ltypeustaff", loadChildren: "./ltypeustaff/ltypeustaff.module#LtypeustaffModule" },
  // { path: "ltypeempincome", loadChildren: "./ltypeempincome/ltypeempincome.module#LtypeempincomeModule" },
  { path: "department", loadChildren: "./department/department.module#DepartmentModule" },
  { path: "leavetype", loadChildren: "./leavetype/leavetype.module#LeavetypeModule" },
  { path: "position", loadChildren: "./position/position.module#PositionModule" },
  { path: "employeestatus", loadChildren: "./employeestatus/employeestatus.module#EmployeestatusModule" },
  { path: "employeeshow", loadChildren: "./employeeshow/employeeshow.module#EmployeeshowModule" },
  { path: "register", loadChildren: "./register/register.module#RegisterModule" },
  { path: "employee", loadChildren: "./employee/employee.module#EmployeeModule" },
  { path: "leavelist", loadChildren: "./leavelist/leavelist.module#LeavelistModule" },
  { path: "leave", loadChildren: "./leave/leave.module#LeaveModule" },
  { path: "text", loadChildren: "./text/text.module#TextModule" },
  //{ path: "seach", loadChildren: "./seach/seach.module#SeachModule" },
  //{ path: "checkleave", loadChildren: "./checkleave/checkleave.module#CheckleaveModule" },
  { path: "**", redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import {
  FormControl
} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  public dep;
  department: any;
  Dept_ID = new FormControl('');
  DeptName = new FormControl('');
  Sector = new FormControl('');
  public Dept_ID_show;
  public DeptName_show;
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,

  ) { }

  ngOnInit() {
    this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
      (data: any) => {
        console.log(data);
        this.dep = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  AddDept() {
    const body = 'Dept_ID=' + this.Dept_ID.value
    + '&DeptName=' + this.DeptName.value
    + '&Sector=' + this.Sector.value
  
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/Leavewebservice/API/InsertDept.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.department = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
          (data: any) => {
            console.log(data);
            this.dep = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      })
   
      
 }
 deleteDept(id, name) {
  this.Dept_ID_show = id;
  this.DeptName_show = name;
  Swal.fire({
    title: 'คุณจะลบ' + ' '+this.DeptName_show +' '+'หรือไม่',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      ).then(()=>{
        this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
          (data: any) => {
            console.log(data);
            this.dep = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
      }) 
      this.http
      .get(
        'http://localhost/Leavewebservice/API/DeleteDept.php?Dept_ID=' + this.Dept_ID_show
      )
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.department = data[0];
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  })

}

updatedept(
  Dept_ID, DeptName ,Sector
) {
  this.Dept_ID = new FormControl(Dept_ID);
  this.DeptName = new FormControl(DeptName);
  this.Sector = new FormControl(Sector);
}
public updateDepartmant() {
  const body =
  'Dept_ID=' + this.Dept_ID.value
  + '&DeptName=' + this.DeptName.value
  + '&Sector=' + this.Sector.value
  console.log(body);
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });
  this.http
    .post('http://localhost/Leavewebservice/API/UpdateDepartmant.php', body, {
      headers: headers
    })
    .subscribe(
      (data: any) => {
        console.log(data);
        this.department = data[0];
      },
      (error: any) => {
        console.log(error);
      }
    );
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'แก้ไขเรียบร้อย',
      showConfirmButton: false,
      timer: 1500
    }).then(()=>{
      this.http.get('http://localhost/Leavewebservice/API/getDept.php').subscribe(
        (data: any) => {
          console.log(data);
          this.dep = data;
        },
        (error: any) => {
          console.log(error);
        }
      );
    })
   
}

}

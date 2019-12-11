import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public name;
  constructor(
    public router: Router  ,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
 
  }



}

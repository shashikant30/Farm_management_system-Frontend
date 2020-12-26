import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { login } from '../content/fields';
import { ContentServiceService } from '../content/content-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  public sessionId: login[];
  public x:string="";

  constructor(private router: Router, private http: HttpClient,private service: ContentServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(username, password){
    this.service.login(username,password)
    .subscribe(response => {
//      console.log(response);
      this.sessionId = response;
    });
    this.x= this.sessionId[0].farmer_id.toString(10);
    this.router.navigate(['./about']);
    localStorage.setItem("notLoggedIn", "false");
    localStorage.setItem("sessionId", this.x);
//    console.log(localStorage.getItem("sessionId")+'shashi');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { login } from '../content/fields';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
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
  constructor(private router: Router, private app: AppComponent, private http: HttpClient) { }

  ngOnInit(): void {
  }
  login(username, password){
    return this.http.get<any>(`http://localhost:3000/login/${username}/${password}`) 
  }
  onSubmit(username, password){
    this.login(username,password)
    .subscribe(response => {
      console.log(response);
      this.sessionId = response;
    });
    this.x= this.sessionId[0].farmer_id.toString(10);
    this.router.navigate(['./about']);
    localStorage.setItem("notLoggedIn", "false");
    localStorage.setItem("sessionId", this.x);
    console.log(localStorage.getItem("sessionId")+'shashi');
  }
}

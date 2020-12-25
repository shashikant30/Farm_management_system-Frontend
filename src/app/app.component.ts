import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = 'white';
  notLoggedIn: boolean = false;
  NotLoggedIn(){
    let x=localStorage.getItem("notLoggedIn");
    console.log(x);
    if(x=="true"){
      this.notLoggedIn=true;
      return true;
    }
    else if(x=="false"){
      this.notLoggedIn=false;
      return false;
    }
  }
  logout(): void {
    this.notLoggedIn = true;
    localStorage.setItem("notLoggedIn", "true");
    localStorage.removeItem("sessionId");
  }
}


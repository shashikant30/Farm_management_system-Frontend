import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  color = 'white';
  loggedIn : boolean = true;
  logout(): void {
    this.loggedIn = false;
  }
  login(): void {
    this.loggedIn = true;
  }
}

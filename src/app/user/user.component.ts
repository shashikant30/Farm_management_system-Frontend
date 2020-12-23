import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
  }
  login(): void {
    this.router.navigate(['./about']);
    this.app.notLoggedIn = false;
  }
}

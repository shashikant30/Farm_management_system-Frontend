import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
 validCredential: boolean;
 username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  username1 = new FormControl('', [Validators.required]);
  password1 = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  onSubmit(username, password){
    console.log(username,password);
    this.validCredential=true;
  }
  onSubmit1(username1, password1){
    console.log(username1,password1);
    this.validCredential=false;
  }
  constructor() { 
  }

  ngOnInit(): void {
  }
}

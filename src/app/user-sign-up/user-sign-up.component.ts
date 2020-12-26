import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ContentServiceService } from '../content/content-service.service';
import { login } from '../content/fields';
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
  credentials: login[];
  constructor(private service: ContentServiceService){}
   onSubmit(username, password){
    this.service.login(username,password).subscribe(response=>{this.credentials=response});
    console.log(username,password);
    if(this.credentials.length == 0){
    this.validCredential=true;
    }
    else{
      this.validCredential=false;
    }
  }
  onSubmit1(username1, password1){
    console.log(username1,password1);
    this.validCredential=false;
  }

  ngOnInit(): void {
  }
}

import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContentServiceService } from '../content/content-service.service';
import { login } from '../content/fields';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  validCredential: boolean;
  
  credentials: login[];
  constructor(private service: ContentServiceService, private fb:FormBuilder){}

  upc = this.fb.group({
    username: [''],
    password: [''],
    confirmPassword: ['']  
    });

  cf = this.fb.group({
    f_fname: [''],
    f_mname: [''],
    f_lname:[''],
    f_address: [''],
    f_phone: [''],
    f_telephone: [''],
    f_gender: [''],
    f_city: ['']
    });
  

   onSubmit(){
    this.service.login(this.upc.value.username,this.upc.value.password).subscribe(response=>{this.credentials=response});
    if(this.credentials.length == 0){
    this.validCredential=true;
    }
    else{
      this.validCredential=false;
    }
  }
  onSubmit1(){
    this.service.addfarmer(this.upc.value.username,this.cf.value,this.upc.value.password).subscribe(response=>{
      console.log(response);
    });
    
  }

  ngOnInit(): void {
  }
}

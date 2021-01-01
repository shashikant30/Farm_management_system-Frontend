import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { UserComponent } from 'src/app/user/user.component';
import { fields, login } from '../../content/fields';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  lstfields:fields[];
  public x=parseInt(localStorage.getItem("sessionId"), 10);

  constructor(private service: ContentServiceService, private user: UserComponent,private fb: FormBuilder) { }

  updatefarmer = this.fb.group({
    farmer_id: [''],
    farmer_fname: [''],
    farmer_mname: [''],
    farmer_lname:[''],
    farmer_address: [''],
    phone: [''],
    telephone: [''],
    city: [''],
    password: ['']
    });
  
  ngOnInit(): void {
    this.service.getFarmerProfile(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      this.updatefarmer.patchValue({
        farmer_id: response[0].F_id,
        farmer_fname: response[0].F_fname,
        farmer_mname: response[0].F_mname,
        farmer_lname: response[0].F_lname,
        farmer_address: response[0].F_address,
        phone: response[0].F_phoneNo,
        telephone: response[0].F_telephoneNo,
        city: response[0].F_city,
        password:response[0].F_password
      });
      });
  //  console.log(this.user.sessionId);
  }

}

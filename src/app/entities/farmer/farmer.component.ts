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
  buttonClicked:string="none";

  constructor(private service: ContentServiceService, private user: UserComponent,private fb: FormBuilder) { }

  updatefarmer = this.fb.group({
    farmer_id: [''],
    f_fname: [''],
    f_mname: [''],
    f_lname:[''],
    f_address: [''],
    f_phone: [''],
    f_telephone: [''],
    f_city: [''],
    f_password: ['']
    });
  
  ngOnInit(): void {
    this.service.getFarmerProfile(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      
      });
  //  console.log(this.user.sessionId);
  }

  loadData(): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(this.x==element.F_id){
        this.updatefarmer.patchValue({
          farmer_id: element.F_id,
          f_fname: element.F_fname,
          f_mname: element.F_mname,
          f_lname: element.F_lname,
          f_address: element.F_address,
          f_phone: element.F_phoneNo,
          f_telephone: element.F_telephoneNo,
          f_city: element.F_city,
          f_password:element.F_password
        });
      }      
    });
  }
  updateFarmer(): void{
    this.service.updatefarmer(this.updatefarmer.value)
    .subscribe(response=>{
      console.log(response);
      });
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }


}

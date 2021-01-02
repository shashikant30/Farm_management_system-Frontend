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
      
      });
  //  console.log(this.user.sessionId);
  }

  loadData(): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(this.x==element.F_id){
        this.updatefarmer.patchValue({
          farmer_id: element.F_id,
          farmer_fname: element.F_fname,
          farmer_mname: element.F_mname,
          farmer_lname: element.F_lname,
          farmer_address: element.F_address,
          phone: element.F_phoneNo,
          telephone: element.F_telephoneNo,
          city: element.F_city,
          password:element.F_password
        });
      }      
    });
  }
  updateFarmer(): void{
    
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { seeds } from '../../content/fields';
@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})
export class SeedsComponent implements OnInit {
  lstfields:seeds[];
  x=localStorage.getItem("sessionId");
  buttonClicked:string="none";
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }
  Seed = this.fb.group({
    seed_id: [''],
    farmer_id: [''],
    pesticide_id: [''],
    fertilizer_id: [''],
    seed_name: [''],
    seed_type: [''],
    seed_category: [''],
    seed_rate: [''],
    seed_quantity: [''],
    company_name: ['']
    });
  ngOnInit(): void {
    this.service.getSeedsInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      this.Seed.patchValue({
        seed_id: response[0].Seed_id,
        farmer_id: response[0].F_id,
        pesticide_id: response[0].Pesticide_id,
        fertilizer_id: response[0].Fertilizer_id,
        seed_name: response[0].Seed_name,
        seed_type: response[0].Seed_type,
        seed_category: response[0].Seed_category,
        seed_rate: response[0].Seed_rate,
        seed_quantity: response[0].Seed_quantity,
        company_name: response[0].Company_name,
      });
    });
  }

  add():void{
    this.buttonClicked="add";
    this.Seed.reset({});
  }
  addSeed(): void{
    
  }


  loadData(x): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(x==element.Seed_id){
        this.Seed.patchValue({
          seed_id: element.Seed_id,
          farmer_id: element.F_id,
          pesticide_id: element.Pesticide_id,
          fertilizer_id: element.Fertilizer_id,
          seed_name: element.Seed_name,
          seed_type: element.Seed_type,
          seed_category: element.Seed_category,
          seed_rate: element.Seed_rate,
          seed_quantity: element.Seed_quantity,
          company_name: element.Company_name,
        });
      }      
    });
  }
  updateSeed(): void{
    
  }


  deleteSeed(x): void{
    
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

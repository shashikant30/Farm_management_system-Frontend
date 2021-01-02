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
    
    });
  }

  add():void{
    this.buttonClicked="add";
    this.Seed.reset({});
  }
  addSeed(): void{
    
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Seed_id){
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

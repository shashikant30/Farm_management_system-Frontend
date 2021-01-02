import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { fertilizers } from '../../content/fields';
@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent implements OnInit {
  lstfields:fertilizers[];
  x=localStorage.getItem("sessionId");
  buttonClicked:string="none";
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  Fertilizer = this.fb.group({
    fertilizer_id: [''],
    farmer_id: [''],
    pesticide_id: [''],
    seed_id: [''],
    fertilizer_name: [''],
    fertilizer_rate: [''],
    fertilizer_quantity: [''],
    crop_id: [''],
    company_name: [''],
    formulation: ['']
    });

  ngOnInit(): void {
    this.service.getFertilizersInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
    });
  }

  add():void{
    this.buttonClicked="add";
    this.Fertilizer.reset({});
  }
  addFertilizer(): void{
    
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Fertilizer_id){
        this.Fertilizer.patchValue({
          fertilizer_id: element.Fertilizer_id,
          farmer_id: element.F_id,
          pesticide_id: element.Pesticide_id,
          seed_id: element.Seed_id,
          fertilizer_name: element.Fertilizer_name,
          fertilizer_rate: element.Fertilizer_rate,
          fertilizer_quantity: element.Fertilizer_quantity,
          crop_id: element.Crop_id,
          company_name: element.Company_name,
          formulation: element.Formulation
        });
      }      
    });
  }
  updateFertilizer(): void{
    
  }


  deleteFertilizer(x): void{
    
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

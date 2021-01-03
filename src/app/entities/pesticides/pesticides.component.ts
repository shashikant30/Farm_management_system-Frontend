import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { pesticides } from '../../content/fields';
@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.component.html',
  styleUrls: ['./pesticides.component.css']
})
export class PesticidesComponent implements OnInit {
  lstfields:pesticides[];
  x=localStorage.getItem("sessionId");
  buttonClicked:string="none";
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  Pesticide = this.fb.group({
    pesticide_id: [''],
    farmer_id: [''],
    fertilizer_id: [''],
    seed_id: [''],
    pesticide_name: [''],
    pesticide_rate: [''],
    pesticide_quantity: [''],
    company_name: [''],
    formulation: ['']
    });

  ngOnInit(): void {
    this.service.getPesticidesInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      
    });
  }

  add():void{
    this.buttonClicked="add";
    this.Pesticide.reset({});
  }
  addPesticide(): void{
    this.service.addPesticide(this.x,this.Pesticide.value)
    .subscribe(response=>{
      console.log(response);
    });
    this.back();
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Pesticide_id){
        this.Pesticide.patchValue({
          pesticide_id: element.Pesticide_id,
          farmer_id: element.F_id,
          fertilizer_id: element.Fertilizer_id,
          seed_id: element.Seed_id,
          pesticide_name: element.Pesticide_name,
          pesticide_rate: element.Pesticide_rate,
          pesticide_quantity: element.Pesticide_quantity,
          company_name: element.Company_name,
          formulation: element.Formulation
        });
      }      
    });
  }
  updatePesticide(): void{
    this.service.updatePesticide(this.x , this.Pesticide.value)
    .subscribe(response=>{
     console.log(response);
    });
    this.back();
  }


  deletePesticide(y): void{
    this.service.deletePesticide(y).subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

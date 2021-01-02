import { Component, OnInit } from '@angular/core';
import { crop } from '../../content/fields';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
  lstfields:crop[];
  x=localStorage.getItem("sessionId");
  buttonClicked: string="none";
  constructor(private service:ContentServiceService,private fb: FormBuilder) { }

  Crop = this.fb.group({
    crop_id: [''],
    farmer_id: [''],
    crop_name: [''],
    crop_quantity: [''],
    farm_id: ['']
    });

  ngOnInit(): void {
    this.service.getCropInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      
      });
  }
  add():void{
    this.buttonClicked="add";
    this.Crop.reset({});
  }
  addFarm(): void{
  /*  this.service.addFarmInfo(this.x,this.update1.value)
    .subscribe(response=>{
      console.log(response);
    });
    *///this.back();
  }


  loadData(x): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(x==element.Crop_id){
        this.Crop.patchValue({
          crop_id: element.Crop_id,
          farmer_id: element.F_id,
          crop_name: element.Crop_name,
          crop_quantity: element.Crop_quantity,
          farm_id: element.Farm_id
        });
      }      
    });
  }
  updateFarm(): void{
   /* this.service.updateFarmInfo(this.x , this.update1.value)
    .subscribe(response=>{
     console.log(response);
    });*/
    //this.back();
  }


  deleteFarm(x): void{
    /*this.service.deleteFarm(x).subscribe(response=>{
      console.log(response);
    });
  *///  this.ngOnInit();
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

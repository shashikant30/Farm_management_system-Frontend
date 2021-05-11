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
  addCrop(): void{
    this.service.addCrop(this.x,this.Crop.value)
    .subscribe(response=>{
      console.log(response);
    });
    this.back();
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Crop_id){
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
  updateCrop(): void{
    this.service.updateCrop(this.x , this.Crop.value)
    .subscribe(response=>{
     console.log(response);
    });
    this.back();
  }


  deleteCrop(y): void{
    this.service.deleteCrop(y).subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

  displayedColumns: string[] = ['crop_id', 'crop_name', 'crop_quantity', 'update', 'delete'];

}

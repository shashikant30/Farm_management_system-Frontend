import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { farm } from '../../content/fields';
@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  lstfields:farm[];
  x=localStorage.getItem("sessionId");
  buttonClicked: string="none";
  
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  update1 = this.fb.group({
    farm_id: [''],
    farmer_id: [''],
    farm_area: [''],
    farm_location: [''],
    farm_irrigation_source: ['']
    });

  ngOnInit(): void {
    this.service.getFarmInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

  add():void{
    this.buttonClicked="add";
    this.update1.reset({});
  }
  addFarm(): void{
    this.service.addFarmInfo(this.x,this.update1.value)
    .subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }


  loadData(x): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(x==element.Farm_id){
        this.update1.patchValue({
          farm_id: element.Farm_id,
          farmer_id: element.F_id,
          farm_area: element.Farm_area,
          farm_location: element.Farm_location,
          farm_irrigation_source: element.Farm_irrigation_source
        });
      }      
    });
  }
  updateFarm(): void{
    this.service.updateFarmInfo(this.x , this.update1.value)
    .subscribe(response=>{
     console.log(response);
     this.ngOnInit();
    });
  }


  deleteFarm(x): void{
    this.service.deleteFarm(x).subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }

  back():void{
    this.buttonClicked="none";
  }

}

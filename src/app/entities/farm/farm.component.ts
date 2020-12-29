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


  addFarm(): void{
    this.service.addFarmInfo(this.x,this.update1.value)
    .subscribe(response=>{
      console.log(response);
    });
  }


  loadData(): void {
    this.service.getFarmInfo(this.x)
    .subscribe(response=>{
        this.update1.patchValue({
          farm_id: response[0].Farm_id,
          farmer_id: response[0].F_id,
          farm_area: response[0].Farm_area,
          farm_location: response[0].Farm_location,
          farm_irrigation_source: response[0].Farm_irrigation_source
        });
      });
  }


  updateFarm(): void{
    this.service.updateFarmInfo(this.x , this.update1.value)
    .subscribe(response=>{
     console.log(response);
    });
  }


  deleteFarm(): void{
    this.service.deleteFarm(13).subscribe(response=>{
      console.log('sads')
    });
  }
}

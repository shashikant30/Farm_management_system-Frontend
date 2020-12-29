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
    a: [''],
    b: [''],
    c: [''],
    d: [''],
    e: ['']
    });
  ngOnInit(): void {
    this.service.getFarmInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }
  onSubmit(): void{
    console.log('sss');
  }
  update(): void {
    this.service.getFarmInfo(this.x)
    .subscribe(response=>{
        this.update1.patchValue({
          a: response[0].Farm_id,
          b: response[0].F_id,
          c: response[0].Farm_area,
          d: response[0].Farm_location,
          e: response[0].Farm_irrigation_source
        });
      });
  }
  updatefarm(): void{
    this.service.updateFarmInfo(this.update1.value.a,this.update1.value.b,this.update1.value.c,this.update1.value.d,this.update1.value.e, this.update1.value)
    .subscribe(response=>{
     // this.lstfields = response;
     console.log(response);
    });
  }
}

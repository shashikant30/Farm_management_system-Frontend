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
      this.Crop.patchValue({
        crop_id: response[0].Crop_id,
        farmer_id: response[0].F_id,
        crop_name: response[0].Crop_name,
        crop_quantity: response[0].Crop_quantity,
        farm_id: response[0].Farm_id
      });
      });
  }

}

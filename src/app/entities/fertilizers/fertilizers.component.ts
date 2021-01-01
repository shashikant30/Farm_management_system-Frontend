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
      this.Fertilizer.patchValue({
        fertilizer_id: response[0].Fertilizer_id,
        farmer_id: response[0].F_id,
        pesticide_id: response[0].Pesticide_id,
        seed_id: response[0].Seed_id,
        fertilizer_name: response[0].Fertilizer_name,
        fertilizer_rate: response[0].Fertilizer_rate,
        fertilizer_quantity: response[0].Fertilizer_quantity,
        crop_id: response[0].Crop_id,
        company_name: response[0].Company_name,
        formulation: response[0].Formulation
      });
    });
  }

}

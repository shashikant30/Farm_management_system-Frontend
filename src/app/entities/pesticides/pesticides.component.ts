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
      this.Pesticide.patchValue({
        pesticide_id: response[0].Pesticide_id,
        farmer_id: response[0].F_id,
        fertilizer_id: response[0].Fertilizer_id,
        seed_id: response[0].Seed_id,
        pesticide_name: response[0].Pesticide_name,
        pesticide_rate: response[0].Pesticide_rate,
        pesticide_quantity: response[0].Pesticide_quantity,
        company_name: response[0].Company_name,
        formulation: response[0].Formulation
      });
    });
  }

}

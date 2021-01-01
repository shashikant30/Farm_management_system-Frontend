import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { warehouse } from '../../content/fields';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  lstfields:warehouse[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  Warehouse = this.fb.group({
    crop_id: [''],
    warehouse_id: [''],
    crop_name: [''],
    crop_stored_quantity: [''],
    total_capacity: [''],
    farmer_id: ['']
    });

  ngOnInit(): void {
    this.service.getWarehouseInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      this.Warehouse.patchValue({
        crop_id: response[0].Crop_id,
        warehouse_id: response[0].Warehouse_id,
        crop_name: response[0].Crop_name,
        crop_stored_quantity: response[0].Crop_stored_quantity,
        total_capacity: response[0].Total_capacity,
        farmer_id: response[0].F_id
    });
      });
  }

}

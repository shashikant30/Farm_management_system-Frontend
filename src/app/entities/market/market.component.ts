import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { crop_market } from '../../content/fields';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  lstfields:crop_market[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  Market = this.fb.group({
    crop_market_id: [''],
    farmer_id: [''],
    warehouse_id: [''],
    crop_id: [''],
    crop_category: [''],
    market_name: [''],
    market_district: [''],
    market_unit: [''],
    crop_quantity: [''],
    crop_price: [''],
    date_of_sold: [''],
    crop_name: ['']
    });

  ngOnInit(): void {
    this.service.getCropMarketInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      this.Market.patchValue({
        crop_market_id: response[0].Crop_market_id,
        farmer_id: response[0].F_id,
        warehouse_id: response[0].Warehouse_id,
        crop_id: response[0].Crop_id,
        crop_category: response[0].Crop_category,
        market_name: response[0].Market_name,
        market_district: response[0].Market_district,
        market_unit: response[0].Market_unit,
        crop_quantity: response[0].Crop_quantity,
        crop_price: response[0].Crop_price,
        date_of_sold: response[0].Date_of_sold,
        crop_name: response[0].crop_name
      });
      });
  }

}

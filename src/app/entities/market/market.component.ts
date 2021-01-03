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
  buttonClicked: string= "none";
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
      
      });
  }

  add():void{
    this.buttonClicked="add";
    this.Market.reset({});
  }
  addMarket(): void{
    this.service.addMarket(this.x,this.Market.value)
    .subscribe(response=>{
      console.log(response);
    });
    this.back();
    
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Crop_market_id){
        this.Market.patchValue({
          crop_market_id: element.Crop_market_id,
          farmer_id: element.F_id,
          warehouse_id: element.Warehouse_id,
          crop_id: element.Crop_id,
          crop_category: element.Crop_category,
          market_name: element.Market_name,
          market_district: element.Market_district,
          market_unit: element.Market_unit,
          crop_quantity: element.Crop_quantity,
          crop_price: element.Crop_price,
          date_of_sold: element.Date_of_sold,
          crop_name: element.crop_name
        });
      }      
    });
  }
  updateMarket(): void{
    this.service.updateMarket(this.x , this.Market.value)
    .subscribe(response=>{
     console.log(response);
    });
    this.back();
  }


  deleteMarket(y): void{
    this.service.deleteMarket(y).subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

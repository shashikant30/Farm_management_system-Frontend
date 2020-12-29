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

  ngOnInit(): void {
    this.service.getCropMarketInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

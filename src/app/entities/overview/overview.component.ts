import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { profitLoss } from '../../content/fields';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  lstfields:profitLoss[];
  x=localStorage.getItem("sessionId");

  constructor(private service: ContentServiceService,private fb: FormBuilder) { }

  overview = this.fb.group({
    crop_id: [''],
    });

  ngOnInit(): void {
    
  }

  pl(): void{
    this.service.profitLoss(this.x, this.overview.value.crop_id)
    .subscribe(response=>{
      this.lstfields = response;
    });
  }

}

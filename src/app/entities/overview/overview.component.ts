import { Component, OnInit } from '@angular/core';
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

  constructor(private service: ContentServiceService) { }

  ngOnInit(): void {
    this.service.profitLoss(this.x)
    .subscribe(response=>{
      this.lstfields = response;
    });
  }

}

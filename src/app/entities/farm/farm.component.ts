import { Component, OnInit } from '@angular/core';
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
  constructor(private service:ContentServiceService) { }

  ngOnInit(): void {
    this.service.getFarmInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

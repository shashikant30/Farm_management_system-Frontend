import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { seeds } from '../../content/fields';
@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})
export class SeedsComponent implements OnInit {
  lstfields:seeds[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getSeedsInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { labours } from '../../content/fields';
@Component({
  selector: 'app-labours',
  templateUrl: './labours.component.html',
  styleUrls: ['./labours.component.css']
})
export class LaboursComponent implements OnInit {
  lstfields:labours[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getLaboursInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { crop } from '../../content/fields';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})
export class CropComponent implements OnInit {
  lstfields:crop[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getCropInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

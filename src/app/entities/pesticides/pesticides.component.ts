import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { pesticides } from '../../content/fields';
@Component({
  selector: 'app-pesticides',
  templateUrl: './pesticides.component.html',
  styleUrls: ['./pesticides.component.css']
})
export class PesticidesComponent implements OnInit {
  lstfields:pesticides[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getPesticidesInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

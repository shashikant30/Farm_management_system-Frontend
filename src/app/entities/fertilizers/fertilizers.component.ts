import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { fertilizers } from '../../content/fields';
@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent implements OnInit {
  lstfields:fertilizers[];
  x=localStorage.getItem("sessionId");
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.service.getFertilizersInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

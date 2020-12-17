import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { fields } from '../../content/fields';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  lstfields:fields[];
  constructor(private service: ContentServiceService) { }

  ngOnInit(): void {
   this.service.getData()
    .subscribe(response=>{
      this.lstfields = response;
      });
  }

}

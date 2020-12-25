import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { UserComponent } from 'src/app/user/user.component';
import { fields, login } from '../../content/fields';
@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  lstfields:fields[];
  public x=parseInt(localStorage.getItem("sessionId"), 10);

  constructor(private service: ContentServiceService, private user: UserComponent) { }
  
  ngOnInit(): void {
    this.service.getData(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      });
    console.log(this.user.sessionId);
  }

}

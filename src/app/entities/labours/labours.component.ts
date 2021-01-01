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

  Labour = this.fb.group({
    labour_id: [''],
    farmer_id: [''],
    l_fname: [''],
    l_mname: [''],
    l_lname: [''],
    l_address: [''],
    l_phoneno: [''],
    l_telephoneno: [''],
    work: [''],
    working_hours: [''],
    salary: [''],
    l_city: [''],
    crop_id: ['']
    });

  ngOnInit(): void {
    this.service.getLaboursInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      this.Labour.patchValue({
        labour_id: response[0].L_id,
        farmer_id: response[0].F_id,
        l_fname: response[0].L_fname,
        l_mname: response[0].L_mname,
        l_lname: response[0].L_lname,
        l_address: response[0].L_address,
        l_phoneno: response[0].L_phoneNo,
        l_telephoneno: response[0].L_telephoneNo,
        work: response[0].Work,
        working_hours: response[0].Working_hours,
        salary: response[0].Salary,
        l_city: response[0].L_city,
        crop_id: response[0].CropId
        });
      });
  }

}

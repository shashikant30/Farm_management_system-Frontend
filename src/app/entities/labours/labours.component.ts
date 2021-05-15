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
  buttonClicked: string="none";
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
      
      });
  }

  add():void{
    this.buttonClicked="add";
    this.Labour.reset({});
  }
  addLabour(): void{
    this.service.addLabour(this.x,this.Labour.value)
    .subscribe(response=>{
      console.log(response);
    });
    this.back();
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.L_id){
        this.Labour.patchValue({
          labour_id: element.L_id,
          farmer_id: element.F_id,
          l_fname: element.L_fname,
          l_mname: element.L_mname,
          l_lname: element.L_lname,
          l_address: element.L_address,
          l_phoneno: element.L_phoneNo,
          l_telephoneno: element.L_telephoneNo,
          work: element.Work,
          working_hours: element.Working_hours,
          salary: element.Salary,
          l_city: element.L_city,
          crop_id: element.CropId
          });
      }      
    });
  }
  updateLabour(): void{
    this.service.updateLabour(this.x , this.Labour.value)
    .subscribe(response=>{
     console.log(response);
    });
    this.back();
  }
  


  deleteLabour(y): void{
    this.service.deleteLabour(y).subscribe(response=>{
      console.log(response);
    });
    this.ngOnInit();
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

  displayedColumns: string[] = ['labour_id','first_name','middle_name','last_name','address','phone',/*'telephone',*/'work','salary','city','crop_id','update','delete'];

}

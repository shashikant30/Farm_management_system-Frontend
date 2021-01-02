import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContentServiceService } from 'src/app/content/content-service.service';
import { warehouse } from '../../content/fields';
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  lstfields:warehouse[];
  x=localStorage.getItem("sessionId");
  buttonClicked:string="none";
  constructor(private service:ContentServiceService, private fb: FormBuilder) { }

  Warehouse = this.fb.group({
    crop_id: [''],
    warehouse_id: [''],
    crop_name: [''],
    crop_stored_quantity: [''],
    total_capacity: [''],
    farmer_id: ['']
    });

  ngOnInit(): void {
    this.service.getWarehouseInfo(this.x)
    .subscribe(response=>{
      this.lstfields = response;
      
      });
  }

  add():void{
    this.buttonClicked="add";
    this.Warehouse.reset({});
  }
  addWarehouse(): void{
    
  }


  loadData(y): void {
    this.buttonClicked="update";
    this.lstfields.forEach(element => {
      if(y==element.Warehouse_id){
        this.Warehouse.patchValue({
          crop_id: element.Crop_id,
          warehouse_id: element.Warehouse_id,
          crop_name: element.Crop_name,
          crop_stored_quantity: element.Crop_stored_quantity,
          total_capacity: element.Total_capacity,
          farmer_id: element.F_id
        });
      }      
    });
  }
  updateWarehouse(): void{
    
  }


  deleteWarehouse(x): void{
    
  }

  back():void{
    this.ngOnInit;
    this.buttonClicked="none";
  }

}

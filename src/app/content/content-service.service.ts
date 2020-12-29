import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient) { }
  
  login(username, password){
    return this.http.get<any>(`http://localhost:3000/login/${username}/${password}`) 
  }

  getFarmerProfile (farmer_id){
    return this.http.get<any>(`http://localhost:3000/farmer/${farmer_id}`)
  }
  getFarmInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/farm_info/${farmer_id}`)
  }
  getCropInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Crop_info/${farmer_id}`)
  }
  getWarehouseInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Warehouse/${farmer_id}`)
  }
  getCropMarketInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Cropmarket/${farmer_id}`)
  }
  getLaboursInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/labourers/${farmer_id}`)
  }
  getPesticidesInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Pesticides/${farmer_id}`)
  }
  getFertilizersInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Fertilizers/${farmer_id}`)
  }
  getSeedsInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/Seeds/${farmer_id}`)
  }


  addFarmInfo (farmer_id, update1){
    return this.http.post<any>(`http://localhost:3000/farm_info/add/${update1.farm_id}/${update1.farmer_id}/${update1.farm_area}/${update1.farm_location}/${update1.farm_irrigation_source}`,update1.value)
  }
  updateFarmInfo(farmer_id, update1){
    return this.http.post<any>(`http://localhost:3000/farm/update/${update1.farm_id}/${update1.farmer_id}/${update1.farm_area}/${update1.farm_location}/${update1.farm_irrigation_source}`,update1.value)
  }
  deleteFarm(farm_id){
    return this.http.delete<any>(`http://localhost:3000/farm/delete/${farm_id}`)
  }


}
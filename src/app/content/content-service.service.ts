import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient) { 

   }
  getFarmerProfile (farmer_id){
    return this.http.get<any>(`http://localhost:3000/farmer/${farmer_id}`)
  }
  getFarmInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/farm_info/${farmer_id}`)
  }
  login(username, password){
    return this.http.get<any>(`http://localhost:3000/login/${username}/${password}`) 
  }
  
}

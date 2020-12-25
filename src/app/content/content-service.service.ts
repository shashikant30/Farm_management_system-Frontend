import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private http: HttpClient) { 

   }
  getData (x){
    return this.http.get<any>(`http://localhost:3000/farmer/${x}`)
  }
  getDataA (){
    return this.http.get<any>('http://localhost:3000/farm')
  }
  
}

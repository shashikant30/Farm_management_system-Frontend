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
    return this.http.get<any>(`http://localhost:3000/crop_info/${farmer_id}`)
  }
  getWarehouseInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/warehouse/${farmer_id}`)
  }
  getCropMarketInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/cropmarket/${farmer_id}`)
  }
  getLaboursInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/labours/${farmer_id}`)
  }
  getPesticidesInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/pesticides/${farmer_id}`)
  }
  getFertilizersInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/fertilizers/${farmer_id}`)
  }
  getSeedsInfo (farmer_id){
    return this.http.get<any>(`http://localhost:3000/seeds/${farmer_id}`)
  }


  addFarmInfo (farmer_id, update1){
    return this.http.post<any>(`http://localhost:3000/farm_info/add/${update1.farm_id}/${update1.farmer_id}/${update1.farm_area}/${update1.farm_location}/${update1.farm_irrigation_source}`, "add data to farm entity" )
  }
  updateFarmInfo(farmer_id, update1){
    return this.http.post<any>(`http://localhost:3000/farm_info/update/${update1.farm_id}/${update1.farmer_id}/${update1.farm_area}/${update1.farm_location}/${update1.farm_irrigation_source}`,update1.value)
  }
  deleteFarm(farm_id){
    return this.http.delete<any>(`http://localhost:3000/farm_info/delete/${farm_id}`)
  }


  addCrop(farmer_id, Crop){
    return this.http.post(`http://localhost:3000/crop_info/add/${Crop.crop_id}/${Crop.crop_name}/${Crop.crop_quantity}/${Crop.farm_id}/${farmer_id}`, "add crop to crop_allocation entity");
  }
  updateCrop(farmer_id, Crop){
    return this.http.post(`http://localhost:3000/crop_info/update/${Crop.crop_id}/${Crop.crop_name}/${Crop.crop_quantity}/${Crop.farm_id}/${farmer_id}`, "update crop to crop_allocation entity");
  }
  deleteCrop(crop_id){
    return this.http.delete(`http://localhost:3000/crop_info/delete/${crop_id}` );
  }
  

  addMarket(){
    return this.http.post(`http://localhost:3000/cropmarket/add/:crop_market_id/:crop_id/:crop_category/:market_name/:market_district/:market_unit/:crop_quantity/:crop_price/:date_of_sold/:crop_name/:warehouse_id/:farmer_id`, );
  }
  updateMarket(){
    return this.http.post(`http://localhost:3000/cropmarket/update/:crop_market_id/:crop_id/:crop_category/:market_name/:market_district/:market_unit/:crop_quantity/:crop_price/:date_of_sold/:crop_name/:farmer_id`, );
  }
  deleteMarket(){
    return this.http.delete(`http://localhost:3000/cropmarket/delete/:crop_market_id`, );
  }
  

  addLabour(){
    return this.http.post(`http://localhost:3000/labours/add/:labour_id/:l_fname/:l_mname/:l_lname/:l_address/:l_phone/:l_telephone/:work/:working_hours/:salary/:l_city/:crop_id/:farmer_id`, );
  }
  updateLabour(){
    return this.http.post(`http://localhost:3000/labours/update/:labour_id/:l_fname/:l_mname/:l_lname/:l_address/:l_phone/:l_telephone/:work/:working_hours/:salary/:l_city/:crop_id/:farmer_id`, );
  }
  deleteLabour(){
    return this.http.delete(`http://localhost:3000/labours/delete/:labour_id`, );
  }
  

  addWarehouse(){
    return this.http.post(`http://localhost:3000/warehouse/add/:warehouse_id/:crop_name/:crop_stored_quantity/:total_capacity/:crop_id`, );
  }
  updateWarehouse(){
    return this.http.post(`http://localhost:3000/warehouse/update/:warehouse_id/:crop_name/:crop_stored_quantity/:total_capacity/:crop_id`, );
  }
  deleteWarehouse(){
    return this.http.delete(`http://localhost:3000/warehouse/delete/:warehouse_id`, );
  }
    

  addPesticide(){
    return this.http.post(`http://localhost:3000/pesticides/add/:pesticide_id/:pesticide_name/:pesticide_rate/:pesticide_quantity/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id`, );
  }
  updatePesticide(){
    return this.http.post(`http://localhost:3000/pesticides/update/:pesticide_id/:pesticide_name/:pesticide_rate/:pesticide_quantity/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id`, );
  }
  deletePesticide(){
    return this.http.delete(`http://localhost:3000/pesticides/delete/:pesticide_id`, );
  }
  

  addFertilizer(){
    return this.http.post(`http://localhost:3000/fertilizers/add/:pesticide_id/:fertilizer_name/:fertilizer_rate/:fertilizer_quantity/:crop_id/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id`, );
  }
  updateFertilizer(){
    return this.http.post(`http://localhost:3000/fertilizers/update/:pesticide_id/:fertilizer_name/:fertilizer_rate/:fertilizer_quantity/:crop_id/:company_name/:formulation/:fertilizer_id/:seed_id/:farmer_id`, );
  }
  deleteFertilizer(){
    return this.http.delete(`http://localhost:3000/fertilizers/delete/:fertilizer_id`, );
  }
  

  addSeed(){
    return this.http.post(`http://localhost:3000/seeds/add/:seed_id/:seed_name/:seed_type/:seed_category/:seed_rate/:seed_quantity/:company_name/:pesticide_id/:fertilizer_id/:farmer_id`, );
  }
  updateSeed(){
    return this.http.post(`http://localhost:3000/seeds/update/:seed_id/:seed_name/:seed_type/:seed_category/:seed_rate/:seed_quantity/:company_name/:pesticide_id/:fertilizer_id/:farmer_id`, );
  }
  deleteSeed(){
    return this.http.delete(`http://localhost:3000/seeds/delete/:Seed_id`);
  }


}
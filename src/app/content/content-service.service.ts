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
  

  addMarket(farmer_id, Market){
    return this.http.post(`http://localhost:3000/cropmarket/add/${Market.crop_market_id}/${Market.crop_id}/${Market.crop_category}/${Market.market_name}/${Market.market_district}/${Market.market_unit}/${Market.crop_quantity}/${Market.crop_price}/${Market.date_of_sold}/${Market.crop_name}/${Market.warehouse_id}/${farmer_id}`, "add market entry");
  }
  updateMarket(farmer_id, Market){
    return this.http.post(`http://localhost:3000/cropmarket/update/${Market.crop_market_id}/${Market.crop_id}/${Market.crop_category}/${Market.market_name}/${Market.market_district}/${Market.market_unit}/${Market.crop_quantity}/${Market.crop_price}/${Market.date_of_sold}/${Market.crop_name}/${farmer_id}`, "update market entry");
  }
  deleteMarket(crop_market_id){
    return this.http.delete(`http://localhost:3000/cropmarket/delete/${crop_market_id}`);
  }
  

  addLabour(farmer_id, Labour){
    return this.http.post(`http://localhost:3000/labours/add/${Labour.labour_id}/${Labour.l_fname}/${Labour.l_mname}/${Labour.l_lname}/${Labour.l_address}/${Labour.l_phoneno}/${Labour.l_telephoneno}/${Labour.work}/${Labour.working_hours}/${Labour.salary}/${Labour.l_city}/${Labour.crop_id}/${farmer_id}`, "add Labour entry");
  }
  updateLabour(farmer_id, Labour){
    return this.http.post(`http://localhost:3000/labours/update/${Labour.labour_id}/${Labour.l_fname}/${Labour.l_mname}/${Labour.l_lname}/${Labour.l_address}/${Labour.l_phoneno}/${Labour.l_telephoneno}/${Labour.work}/${Labour.working_hours}/${Labour.salary}/${Labour.l_city}/${Labour.crop_id}/${farmer_id}`, "update Labour entry");
  }
  deleteLabour(labour_id){
    return this.http.delete(`http://localhost:3000/labours/delete/${labour_id}`);
  }
  

  addWarehouse(farmer_id, Warehouse){
    return this.http.post(`http://localhost:3000/warehouse/add/${Warehouse.warehouse_id}/${Warehouse.crop_name}/${Warehouse.crop_stored_quantity}/${Warehouse.total_capacity}/${Warehouse.crop_id}`, "add warehouse entry");
  }
  updateWarehouse(farmer_id, Warehouse){
    return this.http.post(`http://localhost:3000/warehouse/update/${Warehouse.warehouse_id}/${Warehouse.crop_name}/${Warehouse.crop_stored_quantity}/${Warehouse.total_capacity}/${Warehouse.crop_id}`, "update warehouse entry");
  }
  deleteWarehouse(warehouse_id){
    return this.http.delete(`http://localhost:3000/warehouse/delete/${warehouse_id}`);
  }
    

  addPesticide(farmer_id, Pesticide){
    return this.http.post(`http://localhost:3000/pesticides/add/${Pesticide.pesticide_id}/${Pesticide.pesticide_name}/${Pesticide.pesticide_rate}/${Pesticide.pesticide_quantity}/${Pesticide.company_name}/${Pesticide.formulation}/${Pesticide.fertilizer_id}/${Pesticide.seed_id}/${farmer_id}`, "add pesticide entry");
  }
  updatePesticide(farmer_id, Pesticide){
    return this.http.post(`http://localhost:3000/pesticides/update/${Pesticide.pesticide_id}/${Pesticide.pesticide_name}/${Pesticide.pesticide_rate}/${Pesticide.pesticide_quantity}/${Pesticide.company_name}/${Pesticide.formulation}/${Pesticide.fertilizer_id}/${Pesticide.seed_id}/${farmer_id}`, "update pesticide entry");
  }
  deletePesticide(pesticide_id){
    return this.http.delete(`http://localhost:3000/pesticides/delete/${pesticide_id}`);
  }
  

  addFertilizer(farmer_id, Fertilizer){
    return this.http.post(`http://localhost:3000/fertilizers/add/${Fertilizer.pesticide_id}/${Fertilizer.fertilizer_name}/${Fertilizer.fertilizer_rate}/${Fertilizer.fertilizer_quantity}/${Fertilizer.crop_id}/${Fertilizer.company_name}/${Fertilizer.formulation}/${Fertilizer.fertilizer_id}/${Fertilizer.seed_id}/${farmer_id}`, "add fertilizer entry");
  }
  updateFertilizer(farmer_id, Fertilizer){
    return this.http.post(`http://localhost:3000/fertilizers/update/${Fertilizer.pesticide_id}/${Fertilizer.fertilizer_name}/${Fertilizer.fertilizer_rate}/${Fertilizer.fertilizer_quantity}/${Fertilizer.crop_id}/${Fertilizer.company_name}/${Fertilizer.formulation}/${Fertilizer.fertilizer_id}/${Fertilizer.seed_id}/${farmer_id}`, "update fertilizer entry");
  }
  deleteFertilizer(fertilizer_id){
    return this.http.delete(`http://localhost:3000/fertilizers/delete/${fertilizer_id}`);
  }
  

  addSeed(farmer_id, Seed){
    return this.http.post(`http://localhost:3000/seeds/add/${Seed.seed_id}/${Seed.seed_name}/${Seed.seed_type}/${Seed.seed_category}/${Seed.seed_rate}/${Seed.seed_quantity}/${Seed.company_name}/${Seed.pesticide_id}/${Seed.fertilizer_id}/${farmer_id}`, "add seed entry");
  }
  updateSeed(farmer_id, Seed){
    return this.http.post(`http://localhost:3000/seeds/update/${Seed.seed_id}/${Seed.seed_name}/${Seed.seed_type}/${Seed.seed_category}/${Seed.seed_rate}/${Seed.seed_quantity}/${Seed.company_name}/${Seed.pesticide_id}/${Seed.fertilizer_id}/${farmer_id}`, "update seed entry");
  }
  deleteSeed(seed_id){
    return this.http.delete(`http://localhost:3000/seeds/delete/${seed_id}`);
  }



  profitLoss(farmer_id,crop_id){
    return this.http.get<any>(`http://localhost:3000/overview/profitLoss/${farmer_id}/${crop_id}`);
  }


}
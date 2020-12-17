import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmComponent } from './entities/farm/farm.component';
import { FarmerComponent } from './entities/farmer/farmer.component';
import { CropComponent } from './entities/crop/crop.component';
import { MarketComponent } from './entities/market/market.component';
import { LaboursComponent } from './entities/labours/labours.component';
import { WarehouseComponent } from './entities/warehouse/warehouse.component';
const routes:Routes = [
  { path: 'farmer', component: FarmerComponent},
  { path: 'farm', component: FarmComponent},
  { path: 'crop', component: CropComponent},
  { path: 'market', component: MarketComponent},
  { path: 'labours', component: LaboursComponent}, 
  { path: 'warehouse', component: WarehouseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmComponent } from './entities/farm/farm.component';
import { FarmerComponent } from './entities/farmer/farmer.component';
import { CropComponent } from './entities/crop/crop.component';
import { MarketComponent } from './entities/market/market.component';
import { LaboursComponent } from './entities/labours/labours.component';
import { WarehouseComponent } from './entities/warehouse/warehouse.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './user/user.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { PesticidesComponent } from './entities/pesticides/pesticides.component';
import { FertilizersComponent } from './entities/fertilizers/fertilizers.component';
import { SeedsComponent } from './entities/seeds/seeds.component';

const routes:Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'api', component: ContentComponent,
  children: [
    {path: '', redirectTo: 'farmer', pathMatch: 'full'},
    { path: 'farmer', component: FarmerComponent},
    { path: 'farm', component: FarmComponent},
    { path: 'crop', component: CropComponent},
    { path: 'market', component: MarketComponent},
    { path: 'labours', component: LaboursComponent}, 
    { path: 'warehouse', component: WarehouseComponent },
    { path: 'pesticides', component: PesticidesComponent },
    { path: 'fertilizers', component: FertilizersComponent },
    { path: 'seeds', component: SeedsComponent }
  ]
  },
  { path: 'logout', redirectTo: 'about', pathMatch: 'full'},
  { path: 'user', component: UserComponent},
  { path: 'register', component: UserSignUpComponent},
  { path: 'admin', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

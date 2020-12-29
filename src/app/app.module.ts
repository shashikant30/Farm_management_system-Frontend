import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ContentComponent } from './content/content.component';
import {MatMenuModule} from '@angular/material/menu';
import { FarmComponent } from './entities/farm/farm.component';
import { FarmerComponent } from './entities/farmer/farmer.component';
import { CropComponent } from './entities/crop/crop.component';
import { MarketComponent } from './entities/market/market.component';
import { LaboursComponent } from './entities/labours/labours.component';
import { WarehouseComponent } from './entities/warehouse/warehouse.component';
import { ContentServiceService } from './content/content-service.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PesticidesComponent } from './entities/pesticides/pesticides.component';
import { FertilizersComponent } from './entities/fertilizers/fertilizers.component';
import { SeedsComponent } from './entities/seeds/seeds.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UserComponent,
    AdminComponent,
    UserSignUpComponent,
    ContentComponent,
    FarmComponent,
    FarmerComponent,
    CropComponent,
    MarketComponent,
    LaboursComponent,
    WarehouseComponent,
    PesticidesComponent,
    FertilizersComponent,
    SeedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContentServiceService, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

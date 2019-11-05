import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './components/slider/slider.component';
import { OfferComponent } from './components/offer/offer.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComputerTileComponent } from './components/computer-tile/computer-tile.component';
import { ComputerTilesComponent } from './components/computer-tiles/computer-tiles.component';
import { ComputersComponent } from './components/computers/computers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { LaptopTileComponent } from './components/laptop-tile/laptop-tile.component';
import { LaptopTilesComponent } from './components/laptop-tiles/laptop-tiles.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { SoftwareTileComponent } from './components/software-tile/software-tile.component';
import { SoftwareTilesComponent } from './components/software-tiles/software-tiles.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { SoftwareListComponent } from './components/admin/software-list/software-list.component';
import { ComputerListComponent } from './components/admin/computer-list/computer-list.component';
import { LaptopListComponent } from './components/admin/laptop-list/laptop-list.component';
import { ComputerDetailsEditComponent } from './components/admin/computer-details-edit/computer-details-edit.component';
import {FormsModule} from '@angular/forms'; //dodany import
import {HttpClientModule} from '@angular/common/http'; //dodany import

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    OfferComponent,
    FooterComponent,
    ComputerTileComponent,
    ComputerTilesComponent,
    ComputersComponent,
    PageNotFoundComponent,
    LaptopsComponent,
    LaptopTileComponent,
    LaptopTilesComponent,
    SoftwaresComponent,
    SoftwareTileComponent,
    SoftwareTilesComponent,
    AdminComponent,
    SoftwareListComponent,
    ComputerListComponent,
    LaptopListComponent,
    ComputerDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

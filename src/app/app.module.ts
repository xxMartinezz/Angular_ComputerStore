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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    OfferComponent,
    FooterComponent,
    ComputerTileComponent,
    ComputerTilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

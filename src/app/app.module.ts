import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsBodyComponent } from './components/cards-body/cards-body.component';
import { CartComponent } from './components/cart/cart.component';
import { CardComponent } from './components/card/card.component';
import { GestioncategoriasComponent } from './components/gestioncategorias/gestioncategorias.component';
import { GestionproductosComponent } from './components/gestionproductos/gestionproductos.component';
import { BodyComponent } from './components/body/body.component';
import { AppServices } from './services/app.services';
import { FormsModule } from '@angular/forms';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsBodyComponent,
    CartComponent,
    CardComponent,
    GestioncategoriasComponent,
    GestionproductosComponent,
    BodyComponent,
    FilterCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    AppServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

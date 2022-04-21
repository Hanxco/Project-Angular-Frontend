import { Component, OnInit } from '@angular/core';
import { AppServices, Producto } from 'src/app/services/app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.css']
})
export class CardsBodyComponent implements OnInit {
  
  productos:Producto[] = [];

  constructor( private _appService: AppServices,
               private router:Router ) { }

  ngOnInit(): void {
    this.productos = this._appService.getProductos();
    this._appService.productsView = this.productos;
  }

  verProducto(index:number) {
    //this.router.navigate( ['./productos/heroe', this.index] );
  }

}

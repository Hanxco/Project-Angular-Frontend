import { Component, OnInit } from '@angular/core';
import { AppServices, Cesta } from 'src/app/services/app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cesta:Cesta[] = [];
  subtotal:Number[] = [];

  constructor( private _appService: AppServices,
              private router:Router ) { }

  ngOnInit(): void {
    this.cesta = this._appService.getCesta();
    this.subtotal = this._appService.elements;
  }

  public borrarArticulo (article:Cesta) {
    let quantityReduce = article.cantidad - 1;
    if (quantityReduce == 0) {
      for (let i = 0 ; i < this.cesta.length; i++) {
        if (this.cesta[i]._id == article._id) {
          this.cesta.splice(i, 1);
        }
      }
    } else {
      article.cantidad = quantityReduce;
    }
    let cant = Number(this.subtotal) - Number(article.precio);

    // restore stock units select
    this._appService.restoreStockUnit(quantityReduce, article.productId);
    this.subtotal.pop();
    this.subtotal.push(cant);
  }

  public finalizarPedido() {
    this._appService.finalizarPedido();
  }

  public actualizarSubtotal () {
  }

}

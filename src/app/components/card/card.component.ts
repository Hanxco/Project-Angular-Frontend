import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServices, Producto, Cesta } from 'src/app/services/app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() producto:any = {};
  @Input() index: number | undefined;
  @Input() tallaSel:any = '0';
  @Input() cantidadSel:any = '0';
  @Input() showImage:Boolean = false;

  @Output() productoSeleccionado: EventEmitter<number>;
  @Output() comprarArticulo: EventEmitter<number>;

  constructor( private router:Router,
    private _appService: AppServices ) {
    this.productoSeleccionado = new EventEmitter();
    this.comprarArticulo = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public comprar (producto:Producto) {
    let cesta = {} as Cesta;
    cesta.nombre = producto.nombre;
    cesta.cantidad = this.cantidadSel;
    cesta.precio = this.producto.precio;
    cesta.imagen = this.producto.imagen;
    cesta.subtotal = Number(this.producto.precio) * Number(this.cantidadSel);
    cesta.talla = this.tallaSel;
    this._appService.addProducto(cesta);
  }

  public finalizarPedido() {
    this._appService.finalizarPedido();
  }

  public showImg() {
    this.showImage = !this.showImage;
  }
  

}

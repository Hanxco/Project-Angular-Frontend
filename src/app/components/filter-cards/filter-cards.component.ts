import { Component, OnInit } from '@angular/core';
import { AppServices, Categoria, Producto } from 'src/app/services/app.services';
import { ActivatedRoute } from '@angular/router';
import { Categorias } from 'src/app/models/Categorias';

@Component({
  selector: 'app-filter-cards',
  templateUrl: './filter-cards.component.html',
  styleUrls: ['./filter-cards.component.css']
})
export class FilterCardsComponent implements OnInit {
  
  categoria:Categoria = {
    _id: 0,
    descripcion: '',
    nombre: '',
    orden: ''
  };
  productos:Producto[] = [];
  public id:string;

  constructor( private _appService: AppServices,
    private route: ActivatedRoute ) { 
    }
    
    ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    var categoryFind = this._appService.findCategoryById(Number(id));
    if (categoryFind) {
      this.categoria = categoryFind; 
    }
    var productNew = [];
    this._appService.productsView = this._appService.getProductos();
    this.productos = this._appService.productsView;
    for (var i = 0; i < this.productos.length; i++) {
      if (this.productos[i].categoria == id) {
        productNew.push(this.productos[i]);
      }
    }
    this.productos = productNew;
  }

}

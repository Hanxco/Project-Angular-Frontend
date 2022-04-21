import { Component, OnInit } from '@angular/core';
import { AppServices, Categoria, Producto } from 'src/app/services/app.services';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  producto:Producto = {
    _id: 0,
    nombre: '',
    categoria: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    stock: 0
  };

  categoriaList:Categoria[] = [];
  productosList:Producto[] = [];

  constructor( private _appService: AppServices ) { 
    this.categoriaList = this._appService.getCategorias();
    this.productosList = this._appService.getProductos();
  }

  ngOnInit(): void {
  }

  onSubmit () {
    this.productosList.push(this.producto);
  }

  editarProducto (producto:Producto) {
    this.producto = producto;
  }

  nuevoProducto() {
    var producto = {
      _id: 0,
      nombre: '',
      categoria: '',
      descripcion: '',
      precio: 0,
      imagen: '',
      stock: 0
    }
    this.producto = producto;
  }

}

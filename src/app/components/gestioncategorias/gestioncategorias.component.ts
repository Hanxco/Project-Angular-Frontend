import { Component, OnInit } from '@angular/core';
import { AppServices, Categoria } from 'src/app/services/app.services';

@Component({
  selector: 'app-gestioncategorias',
  templateUrl: './gestioncategorias.component.html',
  styleUrls: ['./gestioncategorias.component.css']
})
export class GestioncategoriasComponent implements OnInit {

  categoria:Categoria = {
    _id: 0,
    nombre: '',
    descripcion: '',
    orden: ''
  };
  categoriaList:Categoria[] = [];

  constructor( private _appService: AppServices ) { 
    this.categoriaList = this._appService.getCategorias();
  }

  ngOnInit(): void {
  }

  onSubmit () {
    this.categoria._id = this._appService.findLastIdCategory();
    this.categoriaList.push(this.categoria)
  }

  editarCategoria(categoria:Categoria) {
    this.categoria = categoria;
  }

  nuevaCategoria() {
    var categoria = {
      _id: 0,
      nombre: '',
      descripcion: '',
      orden: ''
    }
    this.categoria = categoria;
  }

}

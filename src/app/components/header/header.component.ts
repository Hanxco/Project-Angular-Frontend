import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServices, Categoria } from 'src/app/services/app.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias:Categoria[] = [];
  alert:Boolean[] = [];

  constructor( private _appService: AppServices,
               private router:Router ) { }

  ngOnInit(): void {
    this.categorias = this._appService.getCategorias();
    this.alert = this._appService.alert;
  }

  handleCategoria (categoria:Categoria) {
    this.router.navigate(['/categoria', categoria._id])
  }

}

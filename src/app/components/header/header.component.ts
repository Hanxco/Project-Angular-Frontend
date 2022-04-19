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

  constructor( private _appService: AppServices,
               private router:Router ) { }

  ngOnInit(): void {
    this.categorias = this._appService.getCategorias();
  }

}

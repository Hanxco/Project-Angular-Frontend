import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioncategoriasComponent } from './components/gestioncategorias/gestioncategorias.component';
import { GestionproductosComponent } from './components/gestionproductos/gestionproductos.component';
import { BodyComponent } from './components/body/body.component';
import { FilterCardsComponent } from './components/filter-cards/filter-cards.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'gestioncategorias', component: GestioncategoriasComponent },
  { path: 'gestionproductos', component: GestionproductosComponent },
  { path: 'categoria/:id', component: FilterCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

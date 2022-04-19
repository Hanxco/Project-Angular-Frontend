import { Injectable } from '@angular/core';
import { CartComponent } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private productos:Producto[] = [
    { _id:1, nombre: "Normal vs Paranormal", categoria: "1", descripcion: "Camiseta de mangas cortas con ilustración Normal vs Paranormal en campana de Gauss",precio: 50, imagen: 'assets/images/1.jpg', stock: 10},
    { _id:2, nombre: "Popcorn evolution", categoria: "1", descripcion: "Otra gran diseño de mano de Popcorn Collections", precio: 20, imagen: 'assets/images/5.jpg', stock: 13},
    { _id:3, nombre: "Lana Blanca", categoria: "4", descripcion: "Un abrigo confortable y clásico, con el que nunca fallaras.", precio: 20, imagen: 'assets/images/abrigo2.jpg', stock: 13},
    { _id:4, nombre: "Science", categoria: "1", descripcion: "La primera camiseta de nuesta colección de fanáticos de la ciencia", precio: 20, imagen: 'assets/images/4.jpg', stock: 25},
    { _id:5, nombre: "Trekking Pants", categoria: "3", descripcion: "El pantalón más versatil para ir a la montaña", precio: 49, imagen: 'assets/images/pantalon2.JPG', stock: 5},
    { _id:6, nombre: "Trango Pants", categoria: "3", descripcion: "Pantalones marron Caki de color marrón, resistentes y duraderos.", precio: 36, imagen: 'assets/images/pantalon1.jpg', stock: 7},
    { _id:7, nombre: "Abrigo tupido", categoria: "4", descripcion: "Para las mañanas y noches más frías, de lana virgen.", precio: 89, imagen: 'assets/images/abrigo1.jpg', stock: 3},
    { _id:8, nombre: "Vineyard Vine", categoria: "1", descripcion: "Luce el bonito logo de Vineyard Vine en una camiseta blanca", precio: 15, imagen: 'assets/images/2.jpg', stock: 10},
    { _id:9, nombre: "World #0 Programmer", categoria: "1", descripcion: "El paquete de 6 camisetas básicas te permite expresar completamente tu vibrante personalidad con tres opciones de escala de grises.", precio: 15, imagen: 'assets/images/3.jpg', stock: 20},
    { _id:10, nombre: "Camisa vaquera", categoria: "2", descripcion: "Camisa vaquera 100% algodón, con broches en nacar falso", precio: 18, imagen: 'assets/images/camisa2.jpeg', stock: 9},
    { _id:11, nombre: "Camisa sencilla", categoria: "2", descripcion: "Camisa verde Scalpers", precio: 25, imagen: 'assets/images/camisa1.jpg', stock: 2}
  ];

  private categorias:Categoria[] = [
    { _id:1, nombre: "Camisetas", descripcion: "", orden: "1" },
    { _id:2, nombre: "Camisas", descripcion: "", orden: "2" },
    { _id:3, nombre: "Pantalones", descripcion: "", orden: "3" },
    { _id:4, nombre: "Abrigos", descripcion: "", orden: "4" },
    { _id:5, nombre: "Sudaderas", descripcion: "", orden: "5" },
    { _id:6, nombre: "Calzado", descripcion: "", orden: "6" },
    { _id:7, nombre: "Ropa interior", descripcion: "", orden: "7" },
    { _id:8, nombre: "Pijamas", descripcion: "", orden: "8" }
  ];

  private cesta:Cesta[] = [];
  public elements: Number[] = [0];
  public subTotal: any;
  public alert: Boolean[] = [];

  constructor() {
    console.log("Servicio listo para usarse");
  }

  getProductos():Producto[]{
    return this.productos;
  }

  getProducto( idx: number ){
    return this.productos[idx];
  }

  getCategorias():Categoria[] {
    return this.categorias;
  }

  getCesta():Cesta[] {
    return this.cesta;
  }

  addProducto ( article:Cesta ) {
    let subArticle = Number(article.cantidad) * Number(article.precio);
    let cartNow = Number(this.elements[0]);
    this.elements.pop();
    this.elements.push(cartNow + subArticle)
    this.cesta.push(article);
  }

  finalizarPedido() {
    if (this.cesta.length > 0 ) {
      this.alert.push(true);
    }
  }
  
  showAlert () {
    this.alert.push(true);
  }

  searchHeroe( termino:string ):Producto[]{
    let heroesArr:Producto[] = [];
    termino = termino.toLowerCase();

    for( let i=0; i< this.productos.length; i++ ){
      let heroe = this.productos[i];
      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0 ){
        heroe._id = i;
        heroesArr.push(heroe);
      }
    }
    console.log(heroesArr);
    return heroesArr;
  }
}

export interface Producto {
  _id:number,
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
}

export interface Categoria {
  _id:number;
  nombre: string;
  descripcion: string;
  orden: string;
}

export interface Cesta {
  _id:number,
  nombre: string,
  cantidad: number;
  talla: string;
  precio: number;
  imagen: string;
  subtotal: number;
}

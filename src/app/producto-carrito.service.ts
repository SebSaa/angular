import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto-list/Producto';

/*
*Maneja la logica del carro de compras
*
*/

@Injectable({
  providedIn: 'root'
})
export class ProductoCarritoService {

  private _myCart : Producto[] = [];
  myCart: BehaviorSubject<Producto[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(producto : Producto) {
    let item : Producto = this._myCart.find((v1) => v1.nombre == producto.nombre);
    if (!item) {
      this._myCart.push({ ... producto});
    }else{
      item.cant += producto.cant;
    }
    console.log(this._myCart);
    this.myCart.next(this._myCart);
  }

}

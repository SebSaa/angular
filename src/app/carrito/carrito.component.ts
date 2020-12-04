import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductoCarritoService } from '../producto-carrito.service';
import { Producto } from '../producto-list/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  myCart$ : Observable<Producto[]>;

  constructor(private cart : ProductoCarritoService) {
    this.myCart$ = cart.myCart.asObservable();
  }

  ngOnInit(): void {
  }

}

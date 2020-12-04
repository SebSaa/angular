import { Component, OnInit } from '@angular/core';
import { ProductoCarritoService } from '../producto-carrito.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos : Producto[] = [
    {
      nombre : "Arroz",
      tipo : "doble carolina",
      precio : 85,
      stock : 5,
      image : "assets/images/arroz-dc.jpg",
      oferta: false,
      cant: 0,
    },
    {
      nombre : "Fideo",
      tipo : "tallarin",
      precio : 60,
      stock : 4,
      image : "assets/images/fideo-tallarin.jpg",
      oferta: true,
      cant: 0,
    },
    {
      nombre : "Lenteja",
      tipo : "natural",
      precio : 55,
      stock : 1,
      image : "assets/images/lenteja.jpg",
      oferta: false,
      cant: 0,
    },
  ];

  constructor(private cart : ProductoCarritoService) {

  }

  ngOnInit(): void {
  }

  addToCart(producto : Producto): void {
    this.cart.addToCart(producto);
    producto.stock -= producto.cant;
    producto.cant = 0;
  }

  maxVta (m : string) {
    alert(m);
  }




}

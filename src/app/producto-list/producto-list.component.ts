import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos : Producto[] = [
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 100,
      stock : 200,
      image : "assets/images/corona.jpg",
      oferta: false,
      cant: 0,
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 100,
      stock : 200,
      image : "assets/images/corona.jpg",
      oferta: true,
      cant: 0,
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 100,
      stock : 0,
      image : "assets/images/corona.jpg",
      oferta: false,
      cant: 0,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  arribaCant(p : Producto) : void{
    if (p.cant < p.stock){
      p.cant++;
    }
  }

  abajoCant(p : Producto) : void {
    if (p.cant > 0) {
      p.cant--;
    }
  }

  cambiaCant(event, p : Producto) : void {
    event.preventDefault;
  }




}

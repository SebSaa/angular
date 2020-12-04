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
      precio : 50,
      stock : 5,
      image : "assets/images/corona.jpg",
      oferta: false,
      cant: 0,
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 60,
      stock : 5,
      image : "assets/images/corona.jpg",
      oferta: true,
      cant: 0,
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 70,
      stock : 0,
      image : "assets/images/corona.jpg",
      oferta: false,
      cant: 0,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  maxVta (m : string) {
    alert(m);
  }




}

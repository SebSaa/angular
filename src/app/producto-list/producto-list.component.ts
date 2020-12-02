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
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 100,
      stock : 200,
      image : "assets/images/corona.jpg",
    },
    {
      nombre : "10/10",
      tipo : "Simetrico",
      precio : 100,
      stock : 200,
      image : "assets/images/corona.jpg",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

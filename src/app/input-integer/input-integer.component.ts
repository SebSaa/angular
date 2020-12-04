import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../producto-list/Producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad : number;

  @Input()
  max: number;

  @Output()
  cantidadChange : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxVta : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  arribaCant() : void{
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else
      this.maxVta.emit("se alcanzo el maximo");
  }

  abajoCant() : void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  cambiaCant(event) : void {
    //event.preventDefault;
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {

  public numero1: number;
  public numero2: number;
  public resultado: number;

  constructor(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  multiplicarNumeros(): void {
    this.resultado = this.numero1 * this.numero2;
  }

}

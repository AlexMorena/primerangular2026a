import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-reference-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-reference-component.css',
  templateUrl: './tabla-multiplicar-reference-component.html',
})
export class TablaMultiplicarReferenceComponent {
  @ViewChild("cajanumero1") cajaNumero1: ElementRef;
  public num1: number;
  public resultado!: any;

  constructor() {
    this.num1 = 0;
    this.resultado = "";
    this.cajaNumero1 = new ElementRef(0);
  }

  multiplicarNumeros(): void {
    this.num1 = this.cajaNumero1.nativeElement.value;
    for (let i = 1; i <= 10; i++) {
      this.resultado += this.num1 + " * " + i + " = " + (this.num1 * i) + "  |||  ";
    }
  }
}

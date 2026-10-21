import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrl: "./deportes.component.css"
})


export class DeportComponent{
    public numeros: Array<number>;
    public sports: Array<string>;
    constructor(){
        this.sports = ["Canicas","Petanca","Curling","Futbol","Basket","Rugby"];
        this.numeros = [12,15,88,45,18,90];
    }
}
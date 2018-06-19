import { Component, OnInit } from '@angular/core';
import { CalculTva } from './calcul-tva';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {

  calculTva : CalculTva = new CalculTva();

  onCalculer():void {
      this.calculTva.calculer();
  }

  setCssClasses(value : number){
    return {
      positif: value >= 0, // true or false
      negatif: value < 0
      }
  }

  constructor() { }

  ngOnInit() {
  }

}

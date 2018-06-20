import { Component, OnInit } from '@angular/core';
import { CalculTva } from './calcul-tva';
import { CommunService } from '../commun.service';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {

  private traduction : object; // {{ traduction['compute'] }}

  constructor(private _communService  : CommunService) { 
    //l'appel ci dessous à .subscribe() sur un behaviorSubject observable
    //permet d'enregistrer une callback (codé ici sous forme de lambda)
    //qui sera automatiquement (ré-)appelée dès qu'un appel à .bsCurrentTrad.next()
    //sera effectué quelquepart dans l'application .
    _communService.bsCurrentTrad.subscribe( 
                (newCurrentTrad) => { this.traduction = newCurrentTrad; 
                   console.log("newCurrentTrad=" + JSON.stringify(newCurrentTrad)); } 
              ); 

  }

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

 

  ngOnInit() {
  }

}

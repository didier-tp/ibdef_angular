import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

  private _langue : string = "en" ; // ou "fr" ou "es" ou ...

  public get langue(){
    return this._langue;
  }

  public set langue(l : string){
    this._langue = l;
    switch(this._langue){
      case "fr" : this._currentTrad = this._trad_fr; break;
      case "en" :
      default: 
         this._currentTrad = this._trad_en; 
    }
    //appeler ici .next() sur un BehaviorSubject Observable
    //va automatiquement redéclencher toutes les callbacks enregistrées
    //au niveau de tous les composants qui auront appelé 
    //serviceCommun.bsCurrentTrad.subscribe(....)
    this.bsCurrentTrad.next(this._currentTrad);
  }

  private _trad_fr = {
      "compute" : "calculer" ,
      "rate" : "taux"
  }

  private _trad_en = {
    "compute" : "compute" ,
    "rate" : "rate"
  }

  private _currentTrad = this._trad_en ;
  public bsCurrentTrad : BehaviorSubject<object> = new BehaviorSubject<object>(this._currentTrad);

  public getAuteur() : string {
    return "didier" ;
  }

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-liste-prod',
  templateUrl: './liste-prod.component.html',
  styleUrls: ['./liste-prod.component.css']
})
export class ListeProdComponent implements OnInit {

  categorie : string;
  produits ;
  constructor(private _route : ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params:Params)=>{
         this.categorie = params['categorie'];
         this.produitsSelonCategorie();
      }
    );
  }

  produitsSelonCategorie(){
      switch(this.categorie){
        case "livres":
           this.produits = [
             { name : "angular" , prix: 15.0},
             { name : "java" , prix: 20.0}
           ] ; break;
           case "dvd":
           this.produits = [
             { name : "film1" , prix: 12.0},
             { name : "film2" , prix: 18.0}
           ] ; break;
           case "promo":
           default:
           this.produits = [
             { name : "poupee" , prix: 90.0},
             { name : "ballon" , prix: 20.0}
           ] ; 
      }
  }

}

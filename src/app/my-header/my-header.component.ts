import { Component, OnInit, Input } from '@angular/core';
import { CommunService } from '../commun.service';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor(private _communService  : CommunService){
    this.date = new Date();
  }

langue : string = "en";

onLangueChange(){
   //this.langue  sera maj via [(ngModel)]="langue"
   //le set langue() sera appelé sur ._communService
   this._communService.langue = this.langue;
}

@Input()
titre : string;

@Input()
fixedValue : string;

date: Date ;





  ngOnInit() {
    let auteur = this._communService.getAuteur();
    console.log("auteur=" + auteur);
    this.fixedValue += "_" +auteur; //modif de this.fixedValue après la prise en compte de @Input()
  }

}

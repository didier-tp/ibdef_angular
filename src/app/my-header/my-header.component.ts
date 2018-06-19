import { Component, OnInit, Input } from '@angular/core';
import { CommunService } from '../commun.service';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

@Input()
titre : string;

@Input()
fixedValue : string;

date: Date ;

constructor(private _communService  : CommunService){
  this.date = new Date();
}



  ngOnInit() {
    let auteur = this._communService.getAuteur();
    console.log("auteur=" + auteur);
    this.fixedValue += "_" +auteur; //modif de this.fixedValue après la prise en compte de @Input()
  }

}

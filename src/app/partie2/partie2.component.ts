import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.css']
})
export class Partie2Component implements OnInit {


  categories = [ 
    { name : "promo" } , { name : "livres" } , { name : "dvd" }
  ];

  constructor(private _route: ActivatedRoute) { 
   
  }

  ngOnInit() {
  }

}

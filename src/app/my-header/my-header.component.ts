import { Component, OnInit, Input } from '@angular/core';

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

constructor(){
this.date = new Date();
}



  ngOnInit() {
  }

}

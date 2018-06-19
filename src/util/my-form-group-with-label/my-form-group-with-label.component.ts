import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-fg-label',
  templateUrl: './my-form-group-with-label.component.html',
  styleUrls: ['./my-form-group-with-label.component.css']
})
export class MyFormGroupWithLabelComponent implements OnInit {

  @Input()
  label : string ="?";

  constructor() { }

  ngOnInit() {
  }

}

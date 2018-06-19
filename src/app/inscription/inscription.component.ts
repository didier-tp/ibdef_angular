import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client';
import { NgForm, Validators } from '@angular/forms';
import { ValidatePositif } from '../positif.validator';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @ViewChild('formXy') form : NgForm ;

  client : Client = new Client();
  submitted: boolean = false;
  onSubmit(){
    this.submitted = true;
   //futur envoi via appel WS REST en post
  }

  constructor() { }

  ngOnInit() {
  }

  onResetForm(){
    this.client = new Client();
    this.submitted = false;
  }

  onFormInit(){
    this.form.controls['telephone'].setValidators(
      [Validators.required ,
      Validators.minLength(10)
    ]);

    this.form.controls['prenom'].setValidators(
      [Validators.required 
     ]);

    this.form.controls['age'].setValidators(
      [Validators.required ,
        ValidatePositif , Validators.max(150)
    ]);
  }

}

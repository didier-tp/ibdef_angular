import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client';
import { NgForm, Validators } from '@angular/forms';
import { ValidatePositif } from '../positif.validator';
import { ClientService } from '../client.service';

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
    this._clientService.postInscriptionsObservable(this.client)
              .subscribe( (clientEnregistre) => { this.client = clientEnregistre;
                                                  this.onSearchClients(); } ,
                          (error)  => console.log(error)
                         );
                       
  }

  tabClients : Client[] = []; //à afficher coté html dans tableau via *ngFor

  constructor(private _clientService : ClientService) { }

  // (click)="onSearchClients()"
  onSearchClients(){
    this._clientService.getTabInscriptionsObservable()
            .subscribe( (tabInscription) => { this.tabClients = tabInscription; } ,
                        (error)  => console.log(error)
                      );
  }

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

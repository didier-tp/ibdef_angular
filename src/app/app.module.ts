import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilModule } from '../util/util.module';
import { MyHeaderComponent } from './my-header/my-header.component';
import { CommunService } from './commun.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { Partie2Component } from './partie2/partie2.component';
import { ListeProdComponent } from './partie2/liste-prod/liste-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    InscriptionComponent,
    MyHeaderComponent,
    WelcomeComponent ,
    Partie2Component,
    ListeProdComponent
  ],
  imports: [
    BrowserModule , FormsModule , UtilModule , HttpClientModule ,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: 'partie2', component: Partie2Component }
      ])
  ],
  providers: [ CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }

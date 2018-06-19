import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilModule } from '../util/util.module';

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule , FormsModule , UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

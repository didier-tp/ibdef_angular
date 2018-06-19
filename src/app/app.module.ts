import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilModule } from '../util/util.module';
import { MyHeaderComponent } from './my-header/my-header.component';
import { CommunService } from './commun.service';

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    InscriptionComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule , FormsModule , UtilModule
  ],
  providers: [ CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }

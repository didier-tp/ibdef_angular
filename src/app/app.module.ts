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

@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    InscriptionComponent,
    MyHeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule , FormsModule , UtilModule , HttpClientModule
  ],
  providers: [ CommunService],
  bootstrap: [AppComponent]
})
export class AppModule { }

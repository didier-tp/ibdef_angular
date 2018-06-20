import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //URL relative via l'option --proxy-config proxy.conf.json de ng serve
  private _inscriptionUrlBase : string = "tp/inscription" ;

  constructor(private _http : HttpClient) { }

  public getTabInscriptionsObservable() : Observable< Client[] > {
    let inscriptionUrl : string = null;
    inscriptionUrl = this._inscriptionUrlBase ;
    console.log( "inscriptionUrl = " + inscriptionUrl);
    return this._http.get<Client[]>(inscriptionUrl );
    }

    private _headers = new HttpHeaders({'Content-Type': 'application/json'});

    public postInscriptionsObservable(cli : Client):Observable<Client> {
      let inscriptionUrl : string = "./tp/inscription" ; //avec ng serve --proxy-config proxy.conf.json
      return this._http.post<Client>(inscriptionUrl ,
                                     JSON.stringify(cli) ,
                                    {headers: this._headers});
      } 

}
